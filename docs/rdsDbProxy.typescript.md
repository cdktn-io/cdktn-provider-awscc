# `rdsDbProxy` Submodule <a name="`rdsDbProxy` Submodule" id="@cdktn/provider-awscc.rdsDbProxy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RdsDbProxy <a name="RdsDbProxy" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_proxy awscc_rds_db_proxy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.Initializer"></a>

```typescript
import { rdsDbProxy } from '@cdktn/provider-awscc'

new rdsDbProxy.RdsDbProxy(scope: Construct, id: string, config: RdsDbProxyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig">RdsDbProxyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig">RdsDbProxyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.putAuth">putAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.resetAuth">resetAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.resetDebugLogging">resetDebugLogging</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.resetDefaultAuthScheme">resetDefaultAuthScheme</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.resetEndpointNetworkType">resetEndpointNetworkType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.resetIdleClientTimeout">resetIdleClientTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.resetRequireTls">resetRequireTls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.resetTargetConnectionNetworkType">resetTargetConnectionNetworkType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.resetVpcSecurityGroupIds">resetVpcSecurityGroupIds</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAuth` <a name="putAuth" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.putAuth"></a>

```typescript
public putAuth(value: IResolvable | RdsDbProxyAuth[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.putAuth.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuth">RdsDbProxyAuth</a>[]

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.putTags"></a>

```typescript
public putTags(value: IResolvable | RdsDbProxyTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTags">RdsDbProxyTags</a>[]

---

##### `resetAuth` <a name="resetAuth" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.resetAuth"></a>

```typescript
public resetAuth(): void
```

##### `resetDebugLogging` <a name="resetDebugLogging" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.resetDebugLogging"></a>

```typescript
public resetDebugLogging(): void
```

##### `resetDefaultAuthScheme` <a name="resetDefaultAuthScheme" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.resetDefaultAuthScheme"></a>

```typescript
public resetDefaultAuthScheme(): void
```

##### `resetEndpointNetworkType` <a name="resetEndpointNetworkType" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.resetEndpointNetworkType"></a>

```typescript
public resetEndpointNetworkType(): void
```

##### `resetIdleClientTimeout` <a name="resetIdleClientTimeout" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.resetIdleClientTimeout"></a>

```typescript
public resetIdleClientTimeout(): void
```

##### `resetRequireTls` <a name="resetRequireTls" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.resetRequireTls"></a>

```typescript
public resetRequireTls(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTargetConnectionNetworkType` <a name="resetTargetConnectionNetworkType" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.resetTargetConnectionNetworkType"></a>

```typescript
public resetTargetConnectionNetworkType(): void
```

##### `resetVpcSecurityGroupIds` <a name="resetVpcSecurityGroupIds" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.resetVpcSecurityGroupIds"></a>

```typescript
public resetVpcSecurityGroupIds(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a RdsDbProxy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.isConstruct"></a>

```typescript
import { rdsDbProxy } from '@cdktn/provider-awscc'

rdsDbProxy.RdsDbProxy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.isTerraformElement"></a>

```typescript
import { rdsDbProxy } from '@cdktn/provider-awscc'

rdsDbProxy.RdsDbProxy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.isTerraformResource"></a>

```typescript
import { rdsDbProxy } from '@cdktn/provider-awscc'

rdsDbProxy.RdsDbProxy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.generateConfigForImport"></a>

```typescript
import { rdsDbProxy } from '@cdktn/provider-awscc'

rdsDbProxy.RdsDbProxy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a RdsDbProxy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RdsDbProxy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RdsDbProxy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_proxy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the RdsDbProxy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.auth">auth</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList">RdsDbProxyAuthList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.dbProxyArn">dbProxyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList">RdsDbProxyTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.authInput">authInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuth">RdsDbProxyAuth</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.dbProxyNameInput">dbProxyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.debugLoggingInput">debugLoggingInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.defaultAuthSchemeInput">defaultAuthSchemeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.endpointNetworkTypeInput">endpointNetworkTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.engineFamilyInput">engineFamilyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.idleClientTimeoutInput">idleClientTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.requireTlsInput">requireTlsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTags">RdsDbProxyTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.targetConnectionNetworkTypeInput">targetConnectionNetworkTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.vpcSecurityGroupIdsInput">vpcSecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.vpcSubnetIdsInput">vpcSubnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.dbProxyName">dbProxyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.debugLogging">debugLogging</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.defaultAuthScheme">defaultAuthScheme</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.endpointNetworkType">endpointNetworkType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.engineFamily">engineFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.idleClientTimeout">idleClientTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.requireTls">requireTls</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.targetConnectionNetworkType">targetConnectionNetworkType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.vpcSecurityGroupIds">vpcSecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.vpcSubnetIds">vpcSubnetIds</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `auth`<sup>Required</sup> <a name="auth" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.auth"></a>

```typescript
public readonly auth: RdsDbProxyAuthList;
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList">RdsDbProxyAuthList</a>

---

##### `dbProxyArn`<sup>Required</sup> <a name="dbProxyArn" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.dbProxyArn"></a>

```typescript
public readonly dbProxyArn: string;
```

- *Type:* string

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.tags"></a>

```typescript
public readonly tags: RdsDbProxyTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList">RdsDbProxyTagsList</a>

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `authInput`<sup>Optional</sup> <a name="authInput" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.authInput"></a>

```typescript
public readonly authInput: IResolvable | RdsDbProxyAuth[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuth">RdsDbProxyAuth</a>[]

---

##### `dbProxyNameInput`<sup>Optional</sup> <a name="dbProxyNameInput" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.dbProxyNameInput"></a>

```typescript
public readonly dbProxyNameInput: string;
```

- *Type:* string

---

##### `debugLoggingInput`<sup>Optional</sup> <a name="debugLoggingInput" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.debugLoggingInput"></a>

```typescript
public readonly debugLoggingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `defaultAuthSchemeInput`<sup>Optional</sup> <a name="defaultAuthSchemeInput" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.defaultAuthSchemeInput"></a>

```typescript
public readonly defaultAuthSchemeInput: string;
```

- *Type:* string

---

##### `endpointNetworkTypeInput`<sup>Optional</sup> <a name="endpointNetworkTypeInput" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.endpointNetworkTypeInput"></a>

```typescript
public readonly endpointNetworkTypeInput: string;
```

- *Type:* string

---

##### `engineFamilyInput`<sup>Optional</sup> <a name="engineFamilyInput" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.engineFamilyInput"></a>

```typescript
public readonly engineFamilyInput: string;
```

- *Type:* string

---

##### `idleClientTimeoutInput`<sup>Optional</sup> <a name="idleClientTimeoutInput" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.idleClientTimeoutInput"></a>

```typescript
public readonly idleClientTimeoutInput: number;
```

- *Type:* number

---

##### `requireTlsInput`<sup>Optional</sup> <a name="requireTlsInput" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.requireTlsInput"></a>

```typescript
public readonly requireTlsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | RdsDbProxyTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTags">RdsDbProxyTags</a>[]

---

##### `targetConnectionNetworkTypeInput`<sup>Optional</sup> <a name="targetConnectionNetworkTypeInput" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.targetConnectionNetworkTypeInput"></a>

```typescript
public readonly targetConnectionNetworkTypeInput: string;
```

- *Type:* string

---

##### `vpcSecurityGroupIdsInput`<sup>Optional</sup> <a name="vpcSecurityGroupIdsInput" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.vpcSecurityGroupIdsInput"></a>

```typescript
public readonly vpcSecurityGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `vpcSubnetIdsInput`<sup>Optional</sup> <a name="vpcSubnetIdsInput" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.vpcSubnetIdsInput"></a>

```typescript
public readonly vpcSubnetIdsInput: string[];
```

- *Type:* string[]

---

##### `dbProxyName`<sup>Required</sup> <a name="dbProxyName" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.dbProxyName"></a>

```typescript
public readonly dbProxyName: string;
```

- *Type:* string

---

##### `debugLogging`<sup>Required</sup> <a name="debugLogging" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.debugLogging"></a>

```typescript
public readonly debugLogging: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `defaultAuthScheme`<sup>Required</sup> <a name="defaultAuthScheme" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.defaultAuthScheme"></a>

```typescript
public readonly defaultAuthScheme: string;
```

- *Type:* string

---

##### `endpointNetworkType`<sup>Required</sup> <a name="endpointNetworkType" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.endpointNetworkType"></a>

```typescript
public readonly endpointNetworkType: string;
```

- *Type:* string

---

##### `engineFamily`<sup>Required</sup> <a name="engineFamily" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.engineFamily"></a>

```typescript
public readonly engineFamily: string;
```

- *Type:* string

---

##### `idleClientTimeout`<sup>Required</sup> <a name="idleClientTimeout" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.idleClientTimeout"></a>

```typescript
public readonly idleClientTimeout: number;
```

- *Type:* number

---

##### `requireTls`<sup>Required</sup> <a name="requireTls" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.requireTls"></a>

```typescript
public readonly requireTls: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `targetConnectionNetworkType`<sup>Required</sup> <a name="targetConnectionNetworkType" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.targetConnectionNetworkType"></a>

```typescript
public readonly targetConnectionNetworkType: string;
```

- *Type:* string

---

##### `vpcSecurityGroupIds`<sup>Required</sup> <a name="vpcSecurityGroupIds" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.vpcSecurityGroupIds"></a>

```typescript
public readonly vpcSecurityGroupIds: string[];
```

- *Type:* string[]

---

##### `vpcSubnetIds`<sup>Required</sup> <a name="vpcSubnetIds" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.vpcSubnetIds"></a>

```typescript
public readonly vpcSubnetIds: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RdsDbProxyAuth <a name="RdsDbProxyAuth" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuth"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuth.Initializer"></a>

```typescript
import { rdsDbProxy } from '@cdktn/provider-awscc'

const rdsDbProxyAuth: rdsDbProxy.RdsDbProxyAuth = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuth.property.authScheme">authScheme</a></code> | <code>string</code> | The type of authentication that the proxy uses for connections from the proxy to the underlying database. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuth.property.clientPasswordAuthType">clientPasswordAuthType</a></code> | <code>string</code> | The type of authentication the proxy uses for connections from clients. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuth.property.description">description</a></code> | <code>string</code> | A user-specified description about the authentication used by a proxy to log in as a specific database user. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuth.property.iamAuth">iamAuth</a></code> | <code>string</code> | Whether to require or disallow Amazon Web Services Identity and Access Management (IAM) authentication for connections to the proxy. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuth.property.secretArn">secretArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) representing the secret that the proxy uses to authenticate to the RDS DB instance or Aurora DB cluster. |

---

##### `authScheme`<sup>Optional</sup> <a name="authScheme" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuth.property.authScheme"></a>

```typescript
public readonly authScheme: string;
```

- *Type:* string

The type of authentication that the proxy uses for connections from the proxy to the underlying database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_proxy#auth_scheme RdsDbProxy#auth_scheme}

---

##### `clientPasswordAuthType`<sup>Optional</sup> <a name="clientPasswordAuthType" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuth.property.clientPasswordAuthType"></a>

```typescript
public readonly clientPasswordAuthType: string;
```

- *Type:* string

The type of authentication the proxy uses for connections from clients.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_proxy#client_password_auth_type RdsDbProxy#client_password_auth_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuth.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A user-specified description about the authentication used by a proxy to log in as a specific database user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_proxy#description RdsDbProxy#description}

---

##### `iamAuth`<sup>Optional</sup> <a name="iamAuth" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuth.property.iamAuth"></a>

```typescript
public readonly iamAuth: string;
```

- *Type:* string

Whether to require or disallow Amazon Web Services Identity and Access Management (IAM) authentication for connections to the proxy.

The ENABLED value is valid only for proxies with RDS for Microsoft SQL Server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_proxy#iam_auth RdsDbProxy#iam_auth}

---

##### `secretArn`<sup>Optional</sup> <a name="secretArn" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuth.property.secretArn"></a>

```typescript
public readonly secretArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) representing the secret that the proxy uses to authenticate to the RDS DB instance or Aurora DB cluster.

These secrets are stored within Amazon Secrets Manager. 

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_proxy#secret_arn RdsDbProxy#secret_arn}

---

### RdsDbProxyConfig <a name="RdsDbProxyConfig" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.Initializer"></a>

```typescript
import { rdsDbProxy } from '@cdktn/provider-awscc'

const rdsDbProxyConfig: rdsDbProxy.RdsDbProxyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.dbProxyName">dbProxyName</a></code> | <code>string</code> | The identifier for the proxy. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.engineFamily">engineFamily</a></code> | <code>string</code> | The kinds of databases that the proxy can connect to. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.roleArn">roleArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the IAM role that the proxy uses to access secrets in AWS Secrets Manager. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.vpcSubnetIds">vpcSubnetIds</a></code> | <code>string[]</code> | VPC subnet IDs to associate with the new proxy. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.auth">auth</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuth">RdsDbProxyAuth</a>[]</code> | The authorization mechanism that the proxy uses. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.debugLogging">debugLogging</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether the proxy includes detailed information about SQL statements in its logs. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.defaultAuthScheme">defaultAuthScheme</a></code> | <code>string</code> | The default authentication scheme that the proxy uses for client connections to the proxy and connections from the proxy to the underlying database. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.endpointNetworkType">endpointNetworkType</a></code> | <code>string</code> | The network type of the DB proxy endpoint. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.idleClientTimeout">idleClientTimeout</a></code> | <code>number</code> | The number of seconds that a connection to the proxy can be inactive before the proxy disconnects it. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.requireTls">requireTls</a></code> | <code>boolean \| cdktn.IResolvable</code> | A Boolean parameter that specifies whether Transport Layer Security (TLS) encryption is required for connections to the proxy. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTags">RdsDbProxyTags</a>[]</code> | An optional set of key-value pairs to associate arbitrary data of your choosing with the proxy. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.targetConnectionNetworkType">targetConnectionNetworkType</a></code> | <code>string</code> | The network type that the proxy uses to connect to the target database. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.vpcSecurityGroupIds">vpcSecurityGroupIds</a></code> | <code>string[]</code> | VPC security group IDs to associate with the new proxy. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `dbProxyName`<sup>Required</sup> <a name="dbProxyName" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.dbProxyName"></a>

```typescript
public readonly dbProxyName: string;
```

- *Type:* string

The identifier for the proxy.

This name must be unique for all proxies owned by your AWS account in the specified AWS Region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_proxy#db_proxy_name RdsDbProxy#db_proxy_name}

---

##### `engineFamily`<sup>Required</sup> <a name="engineFamily" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.engineFamily"></a>

```typescript
public readonly engineFamily: string;
```

- *Type:* string

The kinds of databases that the proxy can connect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_proxy#engine_family RdsDbProxy#engine_family}

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the IAM role that the proxy uses to access secrets in AWS Secrets Manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_proxy#role_arn RdsDbProxy#role_arn}

---

##### `vpcSubnetIds`<sup>Required</sup> <a name="vpcSubnetIds" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.vpcSubnetIds"></a>

```typescript
public readonly vpcSubnetIds: string[];
```

- *Type:* string[]

VPC subnet IDs to associate with the new proxy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_proxy#vpc_subnet_ids RdsDbProxy#vpc_subnet_ids}

---

##### `auth`<sup>Optional</sup> <a name="auth" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.auth"></a>

```typescript
public readonly auth: IResolvable | RdsDbProxyAuth[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuth">RdsDbProxyAuth</a>[]

The authorization mechanism that the proxy uses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_proxy#auth RdsDbProxy#auth}

---

##### `debugLogging`<sup>Optional</sup> <a name="debugLogging" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.debugLogging"></a>

```typescript
public readonly debugLogging: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether the proxy includes detailed information about SQL statements in its logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_proxy#debug_logging RdsDbProxy#debug_logging}

---

##### `defaultAuthScheme`<sup>Optional</sup> <a name="defaultAuthScheme" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.defaultAuthScheme"></a>

```typescript
public readonly defaultAuthScheme: string;
```

- *Type:* string

The default authentication scheme that the proxy uses for client connections to the proxy and connections from the proxy to the underlying database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_proxy#default_auth_scheme RdsDbProxy#default_auth_scheme}

---

##### `endpointNetworkType`<sup>Optional</sup> <a name="endpointNetworkType" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.endpointNetworkType"></a>

```typescript
public readonly endpointNetworkType: string;
```

- *Type:* string

The network type of the DB proxy endpoint.

The network type determines the IP version that the proxy endpoint supports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_proxy#endpoint_network_type RdsDbProxy#endpoint_network_type}

---

##### `idleClientTimeout`<sup>Optional</sup> <a name="idleClientTimeout" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.idleClientTimeout"></a>

```typescript
public readonly idleClientTimeout: number;
```

- *Type:* number

The number of seconds that a connection to the proxy can be inactive before the proxy disconnects it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_proxy#idle_client_timeout RdsDbProxy#idle_client_timeout}

---

##### `requireTls`<sup>Optional</sup> <a name="requireTls" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.requireTls"></a>

```typescript
public readonly requireTls: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

A Boolean parameter that specifies whether Transport Layer Security (TLS) encryption is required for connections to the proxy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_proxy#require_tls RdsDbProxy#require_tls}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | RdsDbProxyTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTags">RdsDbProxyTags</a>[]

An optional set of key-value pairs to associate arbitrary data of your choosing with the proxy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_proxy#tags RdsDbProxy#tags}

---

##### `targetConnectionNetworkType`<sup>Optional</sup> <a name="targetConnectionNetworkType" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.targetConnectionNetworkType"></a>

```typescript
public readonly targetConnectionNetworkType: string;
```

- *Type:* string

The network type that the proxy uses to connect to the target database.

The network type determines the IP version that the proxy uses for connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_proxy#target_connection_network_type RdsDbProxy#target_connection_network_type}

---

##### `vpcSecurityGroupIds`<sup>Optional</sup> <a name="vpcSecurityGroupIds" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.vpcSecurityGroupIds"></a>

```typescript
public readonly vpcSecurityGroupIds: string[];
```

- *Type:* string[]

VPC security group IDs to associate with the new proxy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_proxy#vpc_security_group_ids RdsDbProxy#vpc_security_group_ids}

---

### RdsDbProxyTags <a name="RdsDbProxyTags" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTags.Initializer"></a>

```typescript
import { rdsDbProxy } from '@cdktn/provider-awscc'

const rdsDbProxyTags: rdsDbProxy.RdsDbProxyTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_proxy#key RdsDbProxy#key}. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_proxy#value RdsDbProxy#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_proxy#key RdsDbProxy#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_proxy#value RdsDbProxy#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### RdsDbProxyAuthList <a name="RdsDbProxyAuthList" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.Initializer"></a>

```typescript
import { rdsDbProxy } from '@cdktn/provider-awscc'

new rdsDbProxy.RdsDbProxyAuthList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.get"></a>

```typescript
public get(index: number): RdsDbProxyAuthOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuth">RdsDbProxyAuth</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RdsDbProxyAuth[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuth">RdsDbProxyAuth</a>[]

---


### RdsDbProxyAuthOutputReference <a name="RdsDbProxyAuthOutputReference" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.Initializer"></a>

```typescript
import { rdsDbProxy } from '@cdktn/provider-awscc'

new rdsDbProxy.RdsDbProxyAuthOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.resetAuthScheme">resetAuthScheme</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.resetClientPasswordAuthType">resetClientPasswordAuthType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.resetIamAuth">resetIamAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.resetSecretArn">resetSecretArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthScheme` <a name="resetAuthScheme" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.resetAuthScheme"></a>

```typescript
public resetAuthScheme(): void
```

##### `resetClientPasswordAuthType` <a name="resetClientPasswordAuthType" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.resetClientPasswordAuthType"></a>

```typescript
public resetClientPasswordAuthType(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetIamAuth` <a name="resetIamAuth" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.resetIamAuth"></a>

```typescript
public resetIamAuth(): void
```

##### `resetSecretArn` <a name="resetSecretArn" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.resetSecretArn"></a>

```typescript
public resetSecretArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.authSchemeInput">authSchemeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.clientPasswordAuthTypeInput">clientPasswordAuthTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.iamAuthInput">iamAuthInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.secretArnInput">secretArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.authScheme">authScheme</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.clientPasswordAuthType">clientPasswordAuthType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.iamAuth">iamAuth</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.secretArn">secretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuth">RdsDbProxyAuth</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authSchemeInput`<sup>Optional</sup> <a name="authSchemeInput" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.authSchemeInput"></a>

```typescript
public readonly authSchemeInput: string;
```

- *Type:* string

---

##### `clientPasswordAuthTypeInput`<sup>Optional</sup> <a name="clientPasswordAuthTypeInput" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.clientPasswordAuthTypeInput"></a>

```typescript
public readonly clientPasswordAuthTypeInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `iamAuthInput`<sup>Optional</sup> <a name="iamAuthInput" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.iamAuthInput"></a>

```typescript
public readonly iamAuthInput: string;
```

- *Type:* string

---

##### `secretArnInput`<sup>Optional</sup> <a name="secretArnInput" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.secretArnInput"></a>

```typescript
public readonly secretArnInput: string;
```

- *Type:* string

---

##### `authScheme`<sup>Required</sup> <a name="authScheme" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.authScheme"></a>

```typescript
public readonly authScheme: string;
```

- *Type:* string

---

##### `clientPasswordAuthType`<sup>Required</sup> <a name="clientPasswordAuthType" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.clientPasswordAuthType"></a>

```typescript
public readonly clientPasswordAuthType: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `iamAuth`<sup>Required</sup> <a name="iamAuth" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.iamAuth"></a>

```typescript
public readonly iamAuth: string;
```

- *Type:* string

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.secretArn"></a>

```typescript
public readonly secretArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RdsDbProxyAuth;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuth">RdsDbProxyAuth</a>

---


### RdsDbProxyTagsList <a name="RdsDbProxyTagsList" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.Initializer"></a>

```typescript
import { rdsDbProxy } from '@cdktn/provider-awscc'

new rdsDbProxy.RdsDbProxyTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.get"></a>

```typescript
public get(index: number): RdsDbProxyTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTags">RdsDbProxyTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RdsDbProxyTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTags">RdsDbProxyTags</a>[]

---


### RdsDbProxyTagsOutputReference <a name="RdsDbProxyTagsOutputReference" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.Initializer"></a>

```typescript
import { rdsDbProxy } from '@cdktn/provider-awscc'

new rdsDbProxy.RdsDbProxyTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTags">RdsDbProxyTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RdsDbProxyTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTags">RdsDbProxyTags</a>

---



