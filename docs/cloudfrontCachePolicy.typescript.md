# `cloudfrontCachePolicy` Submodule <a name="`cloudfrontCachePolicy` Submodule" id="@cdktn/provider-awscc.cloudfrontCachePolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudfrontCachePolicy <a name="CloudfrontCachePolicy" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_cache_policy awscc_cloudfront_cache_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.Initializer"></a>

```typescript
import { cloudfrontCachePolicy } from '@cdktn/provider-awscc'

new cloudfrontCachePolicy.CloudfrontCachePolicy(scope: Construct, id: string, config: CloudfrontCachePolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyConfig">CloudfrontCachePolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyConfig">CloudfrontCachePolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.putCachePolicyConfig">putCachePolicyConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCachePolicyConfig` <a name="putCachePolicyConfig" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.putCachePolicyConfig"></a>

```typescript
public putCachePolicyConfig(value: CloudfrontCachePolicyCachePolicyConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.putCachePolicyConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfig">CloudfrontCachePolicyCachePolicyConfig</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CloudfrontCachePolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.isConstruct"></a>

```typescript
import { cloudfrontCachePolicy } from '@cdktn/provider-awscc'

cloudfrontCachePolicy.CloudfrontCachePolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.isTerraformElement"></a>

```typescript
import { cloudfrontCachePolicy } from '@cdktn/provider-awscc'

cloudfrontCachePolicy.CloudfrontCachePolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.isTerraformResource"></a>

```typescript
import { cloudfrontCachePolicy } from '@cdktn/provider-awscc'

cloudfrontCachePolicy.CloudfrontCachePolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.generateConfigForImport"></a>

```typescript
import { cloudfrontCachePolicy } from '@cdktn/provider-awscc'

cloudfrontCachePolicy.CloudfrontCachePolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a CloudfrontCachePolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudfrontCachePolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudfrontCachePolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_cache_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CloudfrontCachePolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.property.cachePolicyConfig">cachePolicyConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference">CloudfrontCachePolicyCachePolicyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.property.cachePolicyId">cachePolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.property.lastModifiedTime">lastModifiedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.property.cachePolicyConfigInput">cachePolicyConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfig">CloudfrontCachePolicyCachePolicyConfig</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `cachePolicyConfig`<sup>Required</sup> <a name="cachePolicyConfig" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.property.cachePolicyConfig"></a>

```typescript
public readonly cachePolicyConfig: CloudfrontCachePolicyCachePolicyConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference">CloudfrontCachePolicyCachePolicyConfigOutputReference</a>

---

##### `cachePolicyId`<sup>Required</sup> <a name="cachePolicyId" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.property.cachePolicyId"></a>

```typescript
public readonly cachePolicyId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastModifiedTime`<sup>Required</sup> <a name="lastModifiedTime" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.property.lastModifiedTime"></a>

```typescript
public readonly lastModifiedTime: string;
```

- *Type:* string

---

##### `cachePolicyConfigInput`<sup>Optional</sup> <a name="cachePolicyConfigInput" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.property.cachePolicyConfigInput"></a>

```typescript
public readonly cachePolicyConfigInput: IResolvable | CloudfrontCachePolicyCachePolicyConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfig">CloudfrontCachePolicyCachePolicyConfig</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudfrontCachePolicyCachePolicyConfig <a name="CloudfrontCachePolicyCachePolicyConfig" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfig.Initializer"></a>

```typescript
import { cloudfrontCachePolicy } from '@cdktn/provider-awscc'

const cloudfrontCachePolicyCachePolicyConfig: cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfig.property.defaultTtl">defaultTtl</a></code> | <code>number</code> | The default amount of time, in seconds, that you want objects to stay in the CloudFront cache before CloudFront sends another request to the origin to see if the object has been updated. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfig.property.maxTtl">maxTtl</a></code> | <code>number</code> | The maximum amount of time, in seconds, that objects stay in the CloudFront cache before CloudFront sends another request to the origin to see if the object has been updated. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfig.property.minTtl">minTtl</a></code> | <code>number</code> | The minimum amount of time, in seconds, that you want objects to stay in the CloudFront cache before CloudFront sends another request to the origin to see if the object has been updated. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfig.property.name">name</a></code> | <code>string</code> | A unique name to identify the cache policy. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfig.property.parametersInCacheKeyAndForwardedToOrigin">parametersInCacheKeyAndForwardedToOrigin</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOrigin">CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOrigin</a></code> | The HTTP headers, cookies, and URL query strings to include in the cache key. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfig.property.comment">comment</a></code> | <code>string</code> | A comment to describe the cache policy. The comment cannot be longer than 128 characters. |

---

##### `defaultTtl`<sup>Required</sup> <a name="defaultTtl" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfig.property.defaultTtl"></a>

```typescript
public readonly defaultTtl: number;
```

- *Type:* number

The default amount of time, in seconds, that you want objects to stay in the CloudFront cache before CloudFront sends another request to the origin to see if the object has been updated.

CloudFront uses this value as the object's time to live (TTL) only when the origin does *not* send ``Cache-Control`` or ``Expires`` headers with the object. For more information, see [Managing How Long Content Stays in an Edge Cache (Expiration)](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html) in the *Amazon CloudFront Developer Guide*.
 The default value for this field is 86400 seconds (one day). If the value of ``MinTTL`` is more than 86400 seconds, then the default value for this field is the same as the value of ``MinTTL``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_cache_policy#default_ttl CloudfrontCachePolicy#default_ttl}

---

##### `maxTtl`<sup>Required</sup> <a name="maxTtl" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfig.property.maxTtl"></a>

```typescript
public readonly maxTtl: number;
```

- *Type:* number

The maximum amount of time, in seconds, that objects stay in the CloudFront cache before CloudFront sends another request to the origin to see if the object has been updated.

CloudFront uses this value only when the origin sends ``Cache-Control`` or ``Expires`` headers with the object. For more information, see [Managing How Long Content Stays in an Edge Cache (Expiration)](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html) in the *Amazon CloudFront Developer Guide*.
 The default value for this field is 31536000 seconds (one year). If the value of ``MinTTL`` or ``DefaultTTL`` is more than 31536000 seconds, then the default value for this field is the same as the value of ``DefaultTTL``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_cache_policy#max_ttl CloudfrontCachePolicy#max_ttl}

---

##### `minTtl`<sup>Required</sup> <a name="minTtl" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfig.property.minTtl"></a>

```typescript
public readonly minTtl: number;
```

- *Type:* number

The minimum amount of time, in seconds, that you want objects to stay in the CloudFront cache before CloudFront sends another request to the origin to see if the object has been updated.

For more information, see [Managing How Long Content Stays in an Edge Cache (Expiration)](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html) in the *Amazon CloudFront Developer Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_cache_policy#min_ttl CloudfrontCachePolicy#min_ttl}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

A unique name to identify the cache policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_cache_policy#name CloudfrontCachePolicy#name}

---

##### `parametersInCacheKeyAndForwardedToOrigin`<sup>Required</sup> <a name="parametersInCacheKeyAndForwardedToOrigin" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfig.property.parametersInCacheKeyAndForwardedToOrigin"></a>

```typescript
public readonly parametersInCacheKeyAndForwardedToOrigin: CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOrigin;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOrigin">CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOrigin</a>

The HTTP headers, cookies, and URL query strings to include in the cache key.

The values included in the cache key are also included in requests that CloudFront sends to the origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_cache_policy#parameters_in_cache_key_and_forwarded_to_origin CloudfrontCachePolicy#parameters_in_cache_key_and_forwarded_to_origin}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfig.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

A comment to describe the cache policy. The comment cannot be longer than 128 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_cache_policy#comment CloudfrontCachePolicy#comment}

---

### CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOrigin <a name="CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOrigin" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOrigin"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOrigin.Initializer"></a>

```typescript
import { cloudfrontCachePolicy } from '@cdktn/provider-awscc'

const cloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOrigin: cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOrigin = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOrigin.property.cookiesConfig">cookiesConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfig">CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfig</a></code> | An object that determines whether any cookies in viewer requests (and if so, which cookies) are included in the cache key and in requests that CloudFront sends to the origin. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOrigin.property.enableAcceptEncodingGzip">enableAcceptEncodingGzip</a></code> | <code>boolean \| cdktn.IResolvable</code> | A flag that can affect whether the ``Accept-Encoding`` HTTP header is included in the cache key and included in requests that CloudFront sends to the origin. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOrigin.property.headersConfig">headersConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfig">CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfig</a></code> | An object that determines whether any HTTP headers (and if so, which headers) are included in the cache key and in requests that CloudFront sends to the origin. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOrigin.property.queryStringsConfig">queryStringsConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfig">CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfig</a></code> | An object that determines whether any URL query strings in viewer requests (and if so, which query strings) are included in the cache key and in requests that CloudFront sends to the origin. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOrigin.property.enableAcceptEncodingBrotli">enableAcceptEncodingBrotli</a></code> | <code>boolean \| cdktn.IResolvable</code> | A flag that can affect whether the ``Accept-Encoding`` HTTP header is included in the cache key and included in requests that CloudFront sends to the origin. |

---

##### `cookiesConfig`<sup>Required</sup> <a name="cookiesConfig" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOrigin.property.cookiesConfig"></a>

```typescript
public readonly cookiesConfig: CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfig">CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfig</a>

An object that determines whether any cookies in viewer requests (and if so, which cookies) are included in the cache key and in requests that CloudFront sends to the origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_cache_policy#cookies_config CloudfrontCachePolicy#cookies_config}

---

##### `enableAcceptEncodingGzip`<sup>Required</sup> <a name="enableAcceptEncodingGzip" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOrigin.property.enableAcceptEncodingGzip"></a>

```typescript
public readonly enableAcceptEncodingGzip: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

A flag that can affect whether the ``Accept-Encoding`` HTTP header is included in the cache key and included in requests that CloudFront sends to the origin.

This field is related to the ``EnableAcceptEncodingBrotli`` field. If one or both of these fields is ``true``*and* the viewer request includes the ``Accept-Encoding`` header, then CloudFront does the following:
  +  Normalizes the value of the viewer's ``Accept-Encoding`` header
  +  Includes the normalized header in the cache key
  +  Includes the normalized header in the request to the origin, if a request is necessary
  
 For more information, see [Compression support](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-policy-compressed-objects) in the *Amazon CloudFront Developer Guide*.
 If you set this value to ``true``, and this cache behavior also has an origin request policy attached, do not include the ``Accept-Encoding`` header in the origin request policy. CloudFront always includes the ``Accept-Encoding`` header in origin requests when the value of this field is ``true``, so including this header in an origin request policy has no effect.
 If both of these fields are ``false``, then CloudFront treats the ``Accept-Encoding`` header the same as any other HTTP header in the viewer request. By default, it's not included in the cache key and it's not included in origin requests. In this case, you can manually add ``Accept-Encoding`` to the headers whitelist like any other HTTP header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_cache_policy#enable_accept_encoding_gzip CloudfrontCachePolicy#enable_accept_encoding_gzip}

---

##### `headersConfig`<sup>Required</sup> <a name="headersConfig" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOrigin.property.headersConfig"></a>

```typescript
public readonly headersConfig: CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfig">CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfig</a>

An object that determines whether any HTTP headers (and if so, which headers) are included in the cache key and in requests that CloudFront sends to the origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_cache_policy#headers_config CloudfrontCachePolicy#headers_config}

---

##### `queryStringsConfig`<sup>Required</sup> <a name="queryStringsConfig" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOrigin.property.queryStringsConfig"></a>

```typescript
public readonly queryStringsConfig: CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfig">CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfig</a>

An object that determines whether any URL query strings in viewer requests (and if so, which query strings) are included in the cache key and in requests that CloudFront sends to the origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_cache_policy#query_strings_config CloudfrontCachePolicy#query_strings_config}

---

##### `enableAcceptEncodingBrotli`<sup>Optional</sup> <a name="enableAcceptEncodingBrotli" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOrigin.property.enableAcceptEncodingBrotli"></a>

```typescript
public readonly enableAcceptEncodingBrotli: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

A flag that can affect whether the ``Accept-Encoding`` HTTP header is included in the cache key and included in requests that CloudFront sends to the origin.

This field is related to the ``EnableAcceptEncodingGzip`` field. If one or both of these fields is ``true``*and* the viewer request includes the ``Accept-Encoding`` header, then CloudFront does the following:
  +  Normalizes the value of the viewer's ``Accept-Encoding`` header
  +  Includes the normalized header in the cache key
  +  Includes the normalized header in the request to the origin, if a request is necessary
  
 For more information, see [Compression support](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-policy-compressed-objects) in the *Amazon CloudFront Developer Guide*.
 If you set this value to ``true``, and this cache behavior also has an origin request policy attached, do not include the ``Accept-Encoding`` header in the origin request policy. CloudFront always includes the ``Accept-Encoding`` header in origin requests when the value of this field is ``true``, so including this header in an origin request policy has no effect.
 If both of these fields are ``false``, then CloudFront treats the ``Accept-Encoding`` header the same as any other HTTP header in the viewer request. By default, it's not included in the cache key and it's not included in origin requests. In this case, you can manually add ``Accept-Encoding`` to the headers whitelist like any other HTTP header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_cache_policy#enable_accept_encoding_brotli CloudfrontCachePolicy#enable_accept_encoding_brotli}

---

### CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfig <a name="CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfig" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfig.Initializer"></a>

```typescript
import { cloudfrontCachePolicy } from '@cdktn/provider-awscc'

const cloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfig: cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfig.property.cookieBehavior">cookieBehavior</a></code> | <code>string</code> | Determines whether any cookies in viewer requests are included in the cache key and in requests that CloudFront sends to the origin. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfig.property.cookies">cookies</a></code> | <code>string[]</code> | Contains a list of cookie names. |

---

##### `cookieBehavior`<sup>Required</sup> <a name="cookieBehavior" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfig.property.cookieBehavior"></a>

```typescript
public readonly cookieBehavior: string;
```

- *Type:* string

Determines whether any cookies in viewer requests are included in the cache key and in requests that CloudFront sends to the origin.

Valid values are:
  +  ``none`` ? No cookies in viewer requests are included in the cache key or in requests that CloudFront sends to the origin. Even when this field is set to ``none``, any cookies that are listed in an ``OriginRequestPolicy``*are* included in origin requests.
  +  ``whitelist`` ? Only the cookies in viewer requests that are listed in the ``CookieNames`` type are included in the cache key and in requests that CloudFront sends to the origin.
  +  ``allExcept`` ? All cookies in viewer requests are included in the cache key and in requests that CloudFront sends to the origin, *except* for those that are listed in the ``CookieNames`` type, which are not included.
  +  ``all`` ? All cookies in viewer requests are included in the cache key and in requests that CloudFront sends to the origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_cache_policy#cookie_behavior CloudfrontCachePolicy#cookie_behavior}

---

##### `cookies`<sup>Optional</sup> <a name="cookies" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfig.property.cookies"></a>

```typescript
public readonly cookies: string[];
```

- *Type:* string[]

Contains a list of cookie names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_cache_policy#cookies CloudfrontCachePolicy#cookies}

---

### CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfig <a name="CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfig" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfig.Initializer"></a>

```typescript
import { cloudfrontCachePolicy } from '@cdktn/provider-awscc'

const cloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfig: cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfig.property.headerBehavior">headerBehavior</a></code> | <code>string</code> | Determines whether any HTTP headers are included in the cache key and in requests that CloudFront sends to the origin. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfig.property.headers">headers</a></code> | <code>string[]</code> | Contains a list of HTTP header names. |

---

##### `headerBehavior`<sup>Required</sup> <a name="headerBehavior" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfig.property.headerBehavior"></a>

```typescript
public readonly headerBehavior: string;
```

- *Type:* string

Determines whether any HTTP headers are included in the cache key and in requests that CloudFront sends to the origin.

Valid values are:
  +  ``none`` ? No HTTP headers are included in the cache key or in requests that CloudFront sends to the origin. Even when this field is set to ``none``, any headers that are listed in an ``OriginRequestPolicy``*are* included in origin requests.
  +  ``whitelist`` ? Only the HTTP headers that are listed in the ``Headers`` type are included in the cache key and in requests that CloudFront sends to the origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_cache_policy#header_behavior CloudfrontCachePolicy#header_behavior}

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfig.property.headers"></a>

```typescript
public readonly headers: string[];
```

- *Type:* string[]

Contains a list of HTTP header names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_cache_policy#headers CloudfrontCachePolicy#headers}

---

### CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfig <a name="CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfig" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfig.Initializer"></a>

```typescript
import { cloudfrontCachePolicy } from '@cdktn/provider-awscc'

const cloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfig: cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfig.property.queryStringBehavior">queryStringBehavior</a></code> | <code>string</code> | Determines whether any URL query strings in viewer requests are included in the cache key and in requests that CloudFront sends to the origin. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfig.property.queryStrings">queryStrings</a></code> | <code>string[]</code> | Contains a list of query string names. |

---

##### `queryStringBehavior`<sup>Required</sup> <a name="queryStringBehavior" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfig.property.queryStringBehavior"></a>

```typescript
public readonly queryStringBehavior: string;
```

- *Type:* string

Determines whether any URL query strings in viewer requests are included in the cache key and in requests that CloudFront sends to the origin.

Valid values are:
  +  ``none`` ? No query strings in viewer requests are included in the cache key or in requests that CloudFront sends to the origin. Even when this field is set to ``none``, any query strings that are listed in an ``OriginRequestPolicy``*are* included in origin requests.
  +  ``whitelist`` ? Only the query strings in viewer requests that are listed in the ``QueryStringNames`` type are included in the cache key and in requests that CloudFront sends to the origin.
  +  ``allExcept`` ? All query strings in viewer requests are included in the cache key and in requests that CloudFront sends to the origin, *except* those that are listed in the ``QueryStringNames`` type, which are not included.
  +  ``all`` ? All query strings in viewer requests are included in the cache key and in requests that CloudFront sends to the origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_cache_policy#query_string_behavior CloudfrontCachePolicy#query_string_behavior}

---

##### `queryStrings`<sup>Optional</sup> <a name="queryStrings" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfig.property.queryStrings"></a>

```typescript
public readonly queryStrings: string[];
```

- *Type:* string[]

Contains a list of query string names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_cache_policy#query_strings CloudfrontCachePolicy#query_strings}

---

### CloudfrontCachePolicyConfig <a name="CloudfrontCachePolicyConfig" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyConfig.Initializer"></a>

```typescript
import { cloudfrontCachePolicy } from '@cdktn/provider-awscc'

const cloudfrontCachePolicyConfig: cloudfrontCachePolicy.CloudfrontCachePolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyConfig.property.cachePolicyConfig">cachePolicyConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfig">CloudfrontCachePolicyCachePolicyConfig</a></code> | The cache policy configuration. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `cachePolicyConfig`<sup>Required</sup> <a name="cachePolicyConfig" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyConfig.property.cachePolicyConfig"></a>

```typescript
public readonly cachePolicyConfig: CloudfrontCachePolicyCachePolicyConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfig">CloudfrontCachePolicyCachePolicyConfig</a>

The cache policy configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_cache_policy#cache_policy_config CloudfrontCachePolicy#cache_policy_config}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudfrontCachePolicyCachePolicyConfigOutputReference <a name="CloudfrontCachePolicyCachePolicyConfigOutputReference" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.Initializer"></a>

```typescript
import { cloudfrontCachePolicy } from '@cdktn/provider-awscc'

new cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.putParametersInCacheKeyAndForwardedToOrigin">putParametersInCacheKeyAndForwardedToOrigin</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.resetComment">resetComment</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putParametersInCacheKeyAndForwardedToOrigin` <a name="putParametersInCacheKeyAndForwardedToOrigin" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.putParametersInCacheKeyAndForwardedToOrigin"></a>

```typescript
public putParametersInCacheKeyAndForwardedToOrigin(value: CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOrigin): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.putParametersInCacheKeyAndForwardedToOrigin.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOrigin">CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOrigin</a>

---

##### `resetComment` <a name="resetComment" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.resetComment"></a>

```typescript
public resetComment(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.property.parametersInCacheKeyAndForwardedToOrigin">parametersInCacheKeyAndForwardedToOrigin</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference">CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.property.defaultTtlInput">defaultTtlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.property.maxTtlInput">maxTtlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.property.minTtlInput">minTtlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.property.parametersInCacheKeyAndForwardedToOriginInput">parametersInCacheKeyAndForwardedToOriginInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOrigin">CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOrigin</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.property.defaultTtl">defaultTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.property.maxTtl">maxTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.property.minTtl">minTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfig">CloudfrontCachePolicyCachePolicyConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `parametersInCacheKeyAndForwardedToOrigin`<sup>Required</sup> <a name="parametersInCacheKeyAndForwardedToOrigin" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.property.parametersInCacheKeyAndForwardedToOrigin"></a>

```typescript
public readonly parametersInCacheKeyAndForwardedToOrigin: CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference">CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference</a>

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `defaultTtlInput`<sup>Optional</sup> <a name="defaultTtlInput" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.property.defaultTtlInput"></a>

```typescript
public readonly defaultTtlInput: number;
```

- *Type:* number

---

##### `maxTtlInput`<sup>Optional</sup> <a name="maxTtlInput" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.property.maxTtlInput"></a>

```typescript
public readonly maxTtlInput: number;
```

- *Type:* number

---

##### `minTtlInput`<sup>Optional</sup> <a name="minTtlInput" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.property.minTtlInput"></a>

```typescript
public readonly minTtlInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parametersInCacheKeyAndForwardedToOriginInput`<sup>Optional</sup> <a name="parametersInCacheKeyAndForwardedToOriginInput" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.property.parametersInCacheKeyAndForwardedToOriginInput"></a>

```typescript
public readonly parametersInCacheKeyAndForwardedToOriginInput: IResolvable | CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOrigin;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOrigin">CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOrigin</a>

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `defaultTtl`<sup>Required</sup> <a name="defaultTtl" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.property.defaultTtl"></a>

```typescript
public readonly defaultTtl: number;
```

- *Type:* number

---

##### `maxTtl`<sup>Required</sup> <a name="maxTtl" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.property.maxTtl"></a>

```typescript
public readonly maxTtl: number;
```

- *Type:* number

---

##### `minTtl`<sup>Required</sup> <a name="minTtl" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.property.minTtl"></a>

```typescript
public readonly minTtl: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudfrontCachePolicyCachePolicyConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfig">CloudfrontCachePolicyCachePolicyConfig</a>

---


### CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference <a name="CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.Initializer"></a>

```typescript
import { cloudfrontCachePolicy } from '@cdktn/provider-awscc'

new cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.resetCookies">resetCookies</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCookies` <a name="resetCookies" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.resetCookies"></a>

```typescript
public resetCookies(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.property.cookieBehaviorInput">cookieBehaviorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.property.cookiesInput">cookiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.property.cookieBehavior">cookieBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.property.cookies">cookies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfig">CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cookieBehaviorInput`<sup>Optional</sup> <a name="cookieBehaviorInput" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.property.cookieBehaviorInput"></a>

```typescript
public readonly cookieBehaviorInput: string;
```

- *Type:* string

---

##### `cookiesInput`<sup>Optional</sup> <a name="cookiesInput" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.property.cookiesInput"></a>

```typescript
public readonly cookiesInput: string[];
```

- *Type:* string[]

---

##### `cookieBehavior`<sup>Required</sup> <a name="cookieBehavior" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.property.cookieBehavior"></a>

```typescript
public readonly cookieBehavior: string;
```

- *Type:* string

---

##### `cookies`<sup>Required</sup> <a name="cookies" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.property.cookies"></a>

```typescript
public readonly cookies: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfig">CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfig</a>

---


### CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference <a name="CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.Initializer"></a>

```typescript
import { cloudfrontCachePolicy } from '@cdktn/provider-awscc'

new cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.resetHeaders">resetHeaders</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHeaders` <a name="resetHeaders" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.resetHeaders"></a>

```typescript
public resetHeaders(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.property.headerBehaviorInput">headerBehaviorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.property.headersInput">headersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.property.headerBehavior">headerBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.property.headers">headers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfig">CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `headerBehaviorInput`<sup>Optional</sup> <a name="headerBehaviorInput" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.property.headerBehaviorInput"></a>

```typescript
public readonly headerBehaviorInput: string;
```

- *Type:* string

---

##### `headersInput`<sup>Optional</sup> <a name="headersInput" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.property.headersInput"></a>

```typescript
public readonly headersInput: string[];
```

- *Type:* string[]

---

##### `headerBehavior`<sup>Required</sup> <a name="headerBehavior" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.property.headerBehavior"></a>

```typescript
public readonly headerBehavior: string;
```

- *Type:* string

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.property.headers"></a>

```typescript
public readonly headers: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfig">CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfig</a>

---


### CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference <a name="CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.Initializer"></a>

```typescript
import { cloudfrontCachePolicy } from '@cdktn/provider-awscc'

new cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.putCookiesConfig">putCookiesConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.putHeadersConfig">putHeadersConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.putQueryStringsConfig">putQueryStringsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.resetEnableAcceptEncodingBrotli">resetEnableAcceptEncodingBrotli</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCookiesConfig` <a name="putCookiesConfig" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.putCookiesConfig"></a>

```typescript
public putCookiesConfig(value: CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.putCookiesConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfig">CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfig</a>

---

##### `putHeadersConfig` <a name="putHeadersConfig" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.putHeadersConfig"></a>

```typescript
public putHeadersConfig(value: CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.putHeadersConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfig">CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfig</a>

---

##### `putQueryStringsConfig` <a name="putQueryStringsConfig" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.putQueryStringsConfig"></a>

```typescript
public putQueryStringsConfig(value: CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.putQueryStringsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfig">CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfig</a>

---

##### `resetEnableAcceptEncodingBrotli` <a name="resetEnableAcceptEncodingBrotli" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.resetEnableAcceptEncodingBrotli"></a>

```typescript
public resetEnableAcceptEncodingBrotli(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.property.cookiesConfig">cookiesConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference">CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.property.headersConfig">headersConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference">CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.property.queryStringsConfig">queryStringsConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference">CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.property.cookiesConfigInput">cookiesConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfig">CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.property.enableAcceptEncodingBrotliInput">enableAcceptEncodingBrotliInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.property.enableAcceptEncodingGzipInput">enableAcceptEncodingGzipInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.property.headersConfigInput">headersConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfig">CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.property.queryStringsConfigInput">queryStringsConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfig">CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.property.enableAcceptEncodingBrotli">enableAcceptEncodingBrotli</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.property.enableAcceptEncodingGzip">enableAcceptEncodingGzip</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOrigin">CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOrigin</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cookiesConfig`<sup>Required</sup> <a name="cookiesConfig" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.property.cookiesConfig"></a>

```typescript
public readonly cookiesConfig: CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference">CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference</a>

---

##### `headersConfig`<sup>Required</sup> <a name="headersConfig" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.property.headersConfig"></a>

```typescript
public readonly headersConfig: CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference">CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference</a>

---

##### `queryStringsConfig`<sup>Required</sup> <a name="queryStringsConfig" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.property.queryStringsConfig"></a>

```typescript
public readonly queryStringsConfig: CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference">CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference</a>

---

##### `cookiesConfigInput`<sup>Optional</sup> <a name="cookiesConfigInput" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.property.cookiesConfigInput"></a>

```typescript
public readonly cookiesConfigInput: IResolvable | CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfig">CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfig</a>

---

##### `enableAcceptEncodingBrotliInput`<sup>Optional</sup> <a name="enableAcceptEncodingBrotliInput" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.property.enableAcceptEncodingBrotliInput"></a>

```typescript
public readonly enableAcceptEncodingBrotliInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enableAcceptEncodingGzipInput`<sup>Optional</sup> <a name="enableAcceptEncodingGzipInput" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.property.enableAcceptEncodingGzipInput"></a>

```typescript
public readonly enableAcceptEncodingGzipInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `headersConfigInput`<sup>Optional</sup> <a name="headersConfigInput" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.property.headersConfigInput"></a>

```typescript
public readonly headersConfigInput: IResolvable | CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfig">CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfig</a>

---

##### `queryStringsConfigInput`<sup>Optional</sup> <a name="queryStringsConfigInput" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.property.queryStringsConfigInput"></a>

```typescript
public readonly queryStringsConfigInput: IResolvable | CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfig">CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfig</a>

---

##### `enableAcceptEncodingBrotli`<sup>Required</sup> <a name="enableAcceptEncodingBrotli" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.property.enableAcceptEncodingBrotli"></a>

```typescript
public readonly enableAcceptEncodingBrotli: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enableAcceptEncodingGzip`<sup>Required</sup> <a name="enableAcceptEncodingGzip" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.property.enableAcceptEncodingGzip"></a>

```typescript
public readonly enableAcceptEncodingGzip: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOrigin;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOrigin">CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOrigin</a>

---


### CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference <a name="CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.Initializer"></a>

```typescript
import { cloudfrontCachePolicy } from '@cdktn/provider-awscc'

new cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.resetQueryStrings">resetQueryStrings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetQueryStrings` <a name="resetQueryStrings" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.resetQueryStrings"></a>

```typescript
public resetQueryStrings(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.property.queryStringBehaviorInput">queryStringBehaviorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.property.queryStringsInput">queryStringsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.property.queryStringBehavior">queryStringBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.property.queryStrings">queryStrings</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfig">CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `queryStringBehaviorInput`<sup>Optional</sup> <a name="queryStringBehaviorInput" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.property.queryStringBehaviorInput"></a>

```typescript
public readonly queryStringBehaviorInput: string;
```

- *Type:* string

---

##### `queryStringsInput`<sup>Optional</sup> <a name="queryStringsInput" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.property.queryStringsInput"></a>

```typescript
public readonly queryStringsInput: string[];
```

- *Type:* string[]

---

##### `queryStringBehavior`<sup>Required</sup> <a name="queryStringBehavior" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.property.queryStringBehavior"></a>

```typescript
public readonly queryStringBehavior: string;
```

- *Type:* string

---

##### `queryStrings`<sup>Required</sup> <a name="queryStrings" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.property.queryStrings"></a>

```typescript
public readonly queryStrings: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfig">CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfig</a>

---



