# `route53QueryLoggingConfig` Submodule <a name="`route53QueryLoggingConfig` Submodule" id="@cdktn/provider-awscc.route53QueryLoggingConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53QueryLoggingConfig <a name="Route53QueryLoggingConfig" id="@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/route53_query_logging_config awscc_route53_query_logging_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.Initializer"></a>

```typescript
import { route53QueryLoggingConfig } from '@cdktn/provider-awscc'

new route53QueryLoggingConfig.Route53QueryLoggingConfig(scope: Construct, id: string, config: Route53QueryLoggingConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfigConfig">Route53QueryLoggingConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfigConfig">Route53QueryLoggingConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Route53QueryLoggingConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.isConstruct"></a>

```typescript
import { route53QueryLoggingConfig } from '@cdktn/provider-awscc'

route53QueryLoggingConfig.Route53QueryLoggingConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.isTerraformElement"></a>

```typescript
import { route53QueryLoggingConfig } from '@cdktn/provider-awscc'

route53QueryLoggingConfig.Route53QueryLoggingConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.isTerraformResource"></a>

```typescript
import { route53QueryLoggingConfig } from '@cdktn/provider-awscc'

route53QueryLoggingConfig.Route53QueryLoggingConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.generateConfigForImport"></a>

```typescript
import { route53QueryLoggingConfig } from '@cdktn/provider-awscc'

route53QueryLoggingConfig.Route53QueryLoggingConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a Route53QueryLoggingConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Route53QueryLoggingConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Route53QueryLoggingConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/route53_query_logging_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Route53QueryLoggingConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.property.queryLoggingConfigId">queryLoggingConfigId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.property.cloudwatchLogsLogGroupArnInput">cloudwatchLogsLogGroupArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.property.hostedZoneIdInput">hostedZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.property.cloudwatchLogsLogGroupArn">cloudwatchLogsLogGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.property.hostedZoneId">hostedZoneId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `queryLoggingConfigId`<sup>Required</sup> <a name="queryLoggingConfigId" id="@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.property.queryLoggingConfigId"></a>

```typescript
public readonly queryLoggingConfigId: string;
```

- *Type:* string

---

##### `cloudwatchLogsLogGroupArnInput`<sup>Optional</sup> <a name="cloudwatchLogsLogGroupArnInput" id="@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.property.cloudwatchLogsLogGroupArnInput"></a>

```typescript
public readonly cloudwatchLogsLogGroupArnInput: string;
```

- *Type:* string

---

##### `hostedZoneIdInput`<sup>Optional</sup> <a name="hostedZoneIdInput" id="@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.property.hostedZoneIdInput"></a>

```typescript
public readonly hostedZoneIdInput: string;
```

- *Type:* string

---

##### `cloudwatchLogsLogGroupArn`<sup>Required</sup> <a name="cloudwatchLogsLogGroupArn" id="@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.property.cloudwatchLogsLogGroupArn"></a>

```typescript
public readonly cloudwatchLogsLogGroupArn: string;
```

- *Type:* string

---

##### `hostedZoneId`<sup>Required</sup> <a name="hostedZoneId" id="@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.property.hostedZoneId"></a>

```typescript
public readonly hostedZoneId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Route53QueryLoggingConfigConfig <a name="Route53QueryLoggingConfigConfig" id="@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfigConfig.Initializer"></a>

```typescript
import { route53QueryLoggingConfig } from '@cdktn/provider-awscc'

const route53QueryLoggingConfigConfig: route53QueryLoggingConfig.Route53QueryLoggingConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfigConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfigConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfigConfig.property.cloudwatchLogsLogGroupArn">cloudwatchLogsLogGroupArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the CloudWatch Logs log group in us-east-1 that Amazon Route 53 publishes query logs to. |
| <code><a href="#@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfigConfig.property.hostedZoneId">hostedZoneId</a></code> | <code>string</code> | The ID of the public hosted zone that Amazon Route 53 logs queries for. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `cloudwatchLogsLogGroupArn`<sup>Required</sup> <a name="cloudwatchLogsLogGroupArn" id="@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfigConfig.property.cloudwatchLogsLogGroupArn"></a>

```typescript
public readonly cloudwatchLogsLogGroupArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the CloudWatch Logs log group in us-east-1 that Amazon Route 53 publishes query logs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/route53_query_logging_config#cloudwatch_logs_log_group_arn Route53QueryLoggingConfig#cloudwatch_logs_log_group_arn}

---

##### `hostedZoneId`<sup>Required</sup> <a name="hostedZoneId" id="@cdktn/provider-awscc.route53QueryLoggingConfig.Route53QueryLoggingConfigConfig.property.hostedZoneId"></a>

```typescript
public readonly hostedZoneId: string;
```

- *Type:* string

The ID of the public hosted zone that Amazon Route 53 logs queries for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/route53_query_logging_config#hosted_zone_id Route53QueryLoggingConfig#hosted_zone_id}

---



