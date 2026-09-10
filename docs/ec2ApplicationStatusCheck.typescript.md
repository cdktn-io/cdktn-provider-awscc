# `ec2ApplicationStatusCheck` Submodule <a name="`ec2ApplicationStatusCheck` Submodule" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2ApplicationStatusCheck <a name="Ec2ApplicationStatusCheck" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check awscc_ec2_application_status_check}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.Initializer"></a>

```typescript
import { ec2ApplicationStatusCheck } from '@cdktn/provider-awscc'

new ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck(scope: Construct, id: string, config: Ec2ApplicationStatusCheckConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig">Ec2ApplicationStatusCheckConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig">Ec2ApplicationStatusCheckConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.putHealthCheckPaths">putHealthCheckPaths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetAggregation">resetAggregation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetDeviceIndex">resetDeviceIndex</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetFailureThreshold">resetFailureThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetHealthCheckPaths">resetHealthCheckPaths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetInitializationGracePeriodSeconds">resetInitializationGracePeriodSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetInterval">resetInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetIpScope">resetIpScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetIpVersion">resetIpVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetStatusCodeMatcher">resetStatusCodeMatcher</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetSuccessThreshold">resetSuccessThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetTimeout">resetTimeout</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putHealthCheckPaths` <a name="putHealthCheckPaths" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.putHealthCheckPaths"></a>

```typescript
public putHealthCheckPaths(value: IResolvable | Ec2ApplicationStatusCheckHealthCheckPaths[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.putHealthCheckPaths.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPaths">Ec2ApplicationStatusCheckHealthCheckPaths</a>[]

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.putTags"></a>

```typescript
public putTags(value: IResolvable | Ec2ApplicationStatusCheckTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTags">Ec2ApplicationStatusCheckTags</a>[]

---

##### `resetAggregation` <a name="resetAggregation" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetAggregation"></a>

```typescript
public resetAggregation(): void
```

##### `resetDeviceIndex` <a name="resetDeviceIndex" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetDeviceIndex"></a>

```typescript
public resetDeviceIndex(): void
```

##### `resetFailureThreshold` <a name="resetFailureThreshold" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetFailureThreshold"></a>

```typescript
public resetFailureThreshold(): void
```

##### `resetHealthCheckPaths` <a name="resetHealthCheckPaths" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetHealthCheckPaths"></a>

```typescript
public resetHealthCheckPaths(): void
```

##### `resetInitializationGracePeriodSeconds` <a name="resetInitializationGracePeriodSeconds" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetInitializationGracePeriodSeconds"></a>

```typescript
public resetInitializationGracePeriodSeconds(): void
```

##### `resetInterval` <a name="resetInterval" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetInterval"></a>

```typescript
public resetInterval(): void
```

##### `resetIpScope` <a name="resetIpScope" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetIpScope"></a>

```typescript
public resetIpScope(): void
```

##### `resetIpVersion` <a name="resetIpVersion" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetIpVersion"></a>

```typescript
public resetIpVersion(): void
```

##### `resetPath` <a name="resetPath" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetPath"></a>

```typescript
public resetPath(): void
```

##### `resetStatusCodeMatcher` <a name="resetStatusCodeMatcher" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetStatusCodeMatcher"></a>

```typescript
public resetStatusCodeMatcher(): void
```

##### `resetSuccessThreshold` <a name="resetSuccessThreshold" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetSuccessThreshold"></a>

```typescript
public resetSuccessThreshold(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeout` <a name="resetTimeout" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetTimeout"></a>

```typescript
public resetTimeout(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2ApplicationStatusCheck resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.isConstruct"></a>

```typescript
import { ec2ApplicationStatusCheck } from '@cdktn/provider-awscc'

ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.isTerraformElement"></a>

```typescript
import { ec2ApplicationStatusCheck } from '@cdktn/provider-awscc'

ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.isTerraformResource"></a>

```typescript
import { ec2ApplicationStatusCheck } from '@cdktn/provider-awscc'

ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.generateConfigForImport"></a>

```typescript
import { ec2ApplicationStatusCheck } from '@cdktn/provider-awscc'

ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a Ec2ApplicationStatusCheck resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Ec2ApplicationStatusCheck to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Ec2ApplicationStatusCheck that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Ec2ApplicationStatusCheck to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.applicationStatusCheckId">applicationStatusCheckId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.creationTime">creationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.healthCheckPaths">healthCheckPaths</a></code> | <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList">Ec2ApplicationStatusCheckHealthCheckPathsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList">Ec2ApplicationStatusCheckTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.aggregationInput">aggregationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.deviceIndexInput">deviceIndexInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.failureThresholdInput">failureThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.healthCheckPathsInput">healthCheckPathsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPaths">Ec2ApplicationStatusCheckHealthCheckPaths</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.initializationGracePeriodSecondsInput">initializationGracePeriodSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.intervalInput">intervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.ipScopeInput">ipScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.ipVersionInput">ipVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.statusCodeMatcherInput">statusCodeMatcherInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.successThresholdInput">successThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTags">Ec2ApplicationStatusCheckTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.timeoutInput">timeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.aggregation">aggregation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.deviceIndex">deviceIndex</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.failureThreshold">failureThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.initializationGracePeriodSeconds">initializationGracePeriodSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.interval">interval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.ipScope">ipScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.ipVersion">ipVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.statusCodeMatcher">statusCodeMatcher</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.successThreshold">successThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.timeout">timeout</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `applicationStatusCheckId`<sup>Required</sup> <a name="applicationStatusCheckId" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.applicationStatusCheckId"></a>

```typescript
public readonly applicationStatusCheckId: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

---

##### `healthCheckPaths`<sup>Required</sup> <a name="healthCheckPaths" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.healthCheckPaths"></a>

```typescript
public readonly healthCheckPaths: Ec2ApplicationStatusCheckHealthCheckPathsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList">Ec2ApplicationStatusCheckHealthCheckPathsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.tags"></a>

```typescript
public readonly tags: Ec2ApplicationStatusCheckTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList">Ec2ApplicationStatusCheckTagsList</a>

---

##### `aggregationInput`<sup>Optional</sup> <a name="aggregationInput" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.aggregationInput"></a>

```typescript
public readonly aggregationInput: string;
```

- *Type:* string

---

##### `deviceIndexInput`<sup>Optional</sup> <a name="deviceIndexInput" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.deviceIndexInput"></a>

```typescript
public readonly deviceIndexInput: number;
```

- *Type:* number

---

##### `failureThresholdInput`<sup>Optional</sup> <a name="failureThresholdInput" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.failureThresholdInput"></a>

```typescript
public readonly failureThresholdInput: number;
```

- *Type:* number

---

##### `healthCheckPathsInput`<sup>Optional</sup> <a name="healthCheckPathsInput" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.healthCheckPathsInput"></a>

```typescript
public readonly healthCheckPathsInput: IResolvable | Ec2ApplicationStatusCheckHealthCheckPaths[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPaths">Ec2ApplicationStatusCheckHealthCheckPaths</a>[]

---

##### `initializationGracePeriodSecondsInput`<sup>Optional</sup> <a name="initializationGracePeriodSecondsInput" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.initializationGracePeriodSecondsInput"></a>

```typescript
public readonly initializationGracePeriodSecondsInput: number;
```

- *Type:* number

---

##### `intervalInput`<sup>Optional</sup> <a name="intervalInput" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.intervalInput"></a>

```typescript
public readonly intervalInput: number;
```

- *Type:* number

---

##### `ipScopeInput`<sup>Optional</sup> <a name="ipScopeInput" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.ipScopeInput"></a>

```typescript
public readonly ipScopeInput: string;
```

- *Type:* string

---

##### `ipVersionInput`<sup>Optional</sup> <a name="ipVersionInput" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.ipVersionInput"></a>

```typescript
public readonly ipVersionInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `statusCodeMatcherInput`<sup>Optional</sup> <a name="statusCodeMatcherInput" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.statusCodeMatcherInput"></a>

```typescript
public readonly statusCodeMatcherInput: string;
```

- *Type:* string

---

##### `successThresholdInput`<sup>Optional</sup> <a name="successThresholdInput" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.successThresholdInput"></a>

```typescript
public readonly successThresholdInput: number;
```

- *Type:* number

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | Ec2ApplicationStatusCheckTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTags">Ec2ApplicationStatusCheckTags</a>[]

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.timeoutInput"></a>

```typescript
public readonly timeoutInput: number;
```

- *Type:* number

---

##### `aggregation`<sup>Required</sup> <a name="aggregation" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.aggregation"></a>

```typescript
public readonly aggregation: string;
```

- *Type:* string

---

##### `deviceIndex`<sup>Required</sup> <a name="deviceIndex" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.deviceIndex"></a>

```typescript
public readonly deviceIndex: number;
```

- *Type:* number

---

##### `failureThreshold`<sup>Required</sup> <a name="failureThreshold" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.failureThreshold"></a>

```typescript
public readonly failureThreshold: number;
```

- *Type:* number

---

##### `initializationGracePeriodSeconds`<sup>Required</sup> <a name="initializationGracePeriodSeconds" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.initializationGracePeriodSeconds"></a>

```typescript
public readonly initializationGracePeriodSeconds: number;
```

- *Type:* number

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.interval"></a>

```typescript
public readonly interval: number;
```

- *Type:* number

---

##### `ipScope`<sup>Required</sup> <a name="ipScope" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.ipScope"></a>

```typescript
public readonly ipScope: string;
```

- *Type:* string

---

##### `ipVersion`<sup>Required</sup> <a name="ipVersion" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.ipVersion"></a>

```typescript
public readonly ipVersion: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `statusCodeMatcher`<sup>Required</sup> <a name="statusCodeMatcher" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.statusCodeMatcher"></a>

```typescript
public readonly statusCodeMatcher: string;
```

- *Type:* string

---

##### `successThreshold`<sup>Required</sup> <a name="successThreshold" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.successThreshold"></a>

```typescript
public readonly successThreshold: number;
```

- *Type:* number

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2ApplicationStatusCheckConfig <a name="Ec2ApplicationStatusCheckConfig" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.Initializer"></a>

```typescript
import { ec2ApplicationStatusCheck } from '@cdktn/provider-awscc'

const ec2ApplicationStatusCheckConfig: ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.port">port</a></code> | <code>number</code> | The port used for the health check. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.protocol">protocol</a></code> | <code>string</code> | The network protocol used for the health check. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.aggregation">aggregation</a></code> | <code>string</code> | Whether this check is included in the rolled-up application status. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.deviceIndex">deviceIndex</a></code> | <code>number</code> | The network interface device index used for the health check. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.failureThreshold">failureThreshold</a></code> | <code>number</code> | The number of consecutive failed probes required to mark the instance unhealthy. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.healthCheckPaths">healthCheckPaths</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPaths">Ec2ApplicationStatusCheckHealthCheckPaths</a>[]</code> | The source/destination network paths used for the health check. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.initializationGracePeriodSeconds">initializationGracePeriodSeconds</a></code> | <code>number</code> | Seconds to wait after instance launch before beginning health checks. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.interval">interval</a></code> | <code>number</code> | The interval, in seconds, between health check probes. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.ipScope">ipScope</a></code> | <code>string</code> | The IP scope used for the health check. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.ipVersion">ipVersion</a></code> | <code>string</code> | The IP version used for the health check. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.path">path</a></code> | <code>string</code> | The HTTP path used for the health check. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.statusCodeMatcher">statusCodeMatcher</a></code> | <code>string</code> | The HTTP status codes considered successful (e.g., "200-299"). |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.successThreshold">successThreshold</a></code> | <code>number</code> | The number of consecutive successful probes required to mark the instance healthy. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTags">Ec2ApplicationStatusCheckTags</a>[]</code> | Tags to apply to the application status check. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.timeout">timeout</a></code> | <code>number</code> | The timeout, in seconds, for each health check probe. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

The port used for the health check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#port Ec2ApplicationStatusCheck#port}

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

The network protocol used for the health check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#protocol Ec2ApplicationStatusCheck#protocol}

---

##### `aggregation`<sup>Optional</sup> <a name="aggregation" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.aggregation"></a>

```typescript
public readonly aggregation: string;
```

- *Type:* string

Whether this check is included in the rolled-up application status.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#aggregation Ec2ApplicationStatusCheck#aggregation}

---

##### `deviceIndex`<sup>Optional</sup> <a name="deviceIndex" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.deviceIndex"></a>

```typescript
public readonly deviceIndex: number;
```

- *Type:* number

The network interface device index used for the health check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#device_index Ec2ApplicationStatusCheck#device_index}

---

##### `failureThreshold`<sup>Optional</sup> <a name="failureThreshold" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.failureThreshold"></a>

```typescript
public readonly failureThreshold: number;
```

- *Type:* number

The number of consecutive failed probes required to mark the instance unhealthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#failure_threshold Ec2ApplicationStatusCheck#failure_threshold}

---

##### `healthCheckPaths`<sup>Optional</sup> <a name="healthCheckPaths" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.healthCheckPaths"></a>

```typescript
public readonly healthCheckPaths: IResolvable | Ec2ApplicationStatusCheckHealthCheckPaths[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPaths">Ec2ApplicationStatusCheckHealthCheckPaths</a>[]

The source/destination network paths used for the health check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#health_check_paths Ec2ApplicationStatusCheck#health_check_paths}

---

##### `initializationGracePeriodSeconds`<sup>Optional</sup> <a name="initializationGracePeriodSeconds" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.initializationGracePeriodSeconds"></a>

```typescript
public readonly initializationGracePeriodSeconds: number;
```

- *Type:* number

Seconds to wait after instance launch before beginning health checks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#initialization_grace_period_seconds Ec2ApplicationStatusCheck#initialization_grace_period_seconds}

---

##### `interval`<sup>Optional</sup> <a name="interval" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.interval"></a>

```typescript
public readonly interval: number;
```

- *Type:* number

The interval, in seconds, between health check probes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#interval Ec2ApplicationStatusCheck#interval}

---

##### `ipScope`<sup>Optional</sup> <a name="ipScope" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.ipScope"></a>

```typescript
public readonly ipScope: string;
```

- *Type:* string

The IP scope used for the health check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#ip_scope Ec2ApplicationStatusCheck#ip_scope}

---

##### `ipVersion`<sup>Optional</sup> <a name="ipVersion" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.ipVersion"></a>

```typescript
public readonly ipVersion: string;
```

- *Type:* string

The IP version used for the health check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#ip_version Ec2ApplicationStatusCheck#ip_version}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

The HTTP path used for the health check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#path Ec2ApplicationStatusCheck#path}

---

##### `statusCodeMatcher`<sup>Optional</sup> <a name="statusCodeMatcher" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.statusCodeMatcher"></a>

```typescript
public readonly statusCodeMatcher: string;
```

- *Type:* string

The HTTP status codes considered successful (e.g., "200-299").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#status_code_matcher Ec2ApplicationStatusCheck#status_code_matcher}

---

##### `successThreshold`<sup>Optional</sup> <a name="successThreshold" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.successThreshold"></a>

```typescript
public readonly successThreshold: number;
```

- *Type:* number

The number of consecutive successful probes required to mark the instance healthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#success_threshold Ec2ApplicationStatusCheck#success_threshold}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | Ec2ApplicationStatusCheckTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTags">Ec2ApplicationStatusCheckTags</a>[]

Tags to apply to the application status check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#tags Ec2ApplicationStatusCheck#tags}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

The timeout, in seconds, for each health check probe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#timeout Ec2ApplicationStatusCheck#timeout}

---

### Ec2ApplicationStatusCheckHealthCheckPaths <a name="Ec2ApplicationStatusCheckHealthCheckPaths" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPaths"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPaths.Initializer"></a>

```typescript
import { ec2ApplicationStatusCheck } from '@cdktn/provider-awscc'

const ec2ApplicationStatusCheckHealthCheckPaths: ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPaths = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPaths.property.destinations">destinations</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinations">Ec2ApplicationStatusCheckHealthCheckPathsDestinations</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#destinations Ec2ApplicationStatusCheck#destinations}. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPaths.property.source">source</a></code> | <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSource">Ec2ApplicationStatusCheckHealthCheckPathsSource</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#source Ec2ApplicationStatusCheck#source}. |

---

##### `destinations`<sup>Optional</sup> <a name="destinations" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPaths.property.destinations"></a>

```typescript
public readonly destinations: IResolvable | Ec2ApplicationStatusCheckHealthCheckPathsDestinations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinations">Ec2ApplicationStatusCheckHealthCheckPathsDestinations</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#destinations Ec2ApplicationStatusCheck#destinations}.

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPaths.property.source"></a>

```typescript
public readonly source: Ec2ApplicationStatusCheckHealthCheckPathsSource;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSource">Ec2ApplicationStatusCheckHealthCheckPathsSource</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#source Ec2ApplicationStatusCheck#source}.

---

### Ec2ApplicationStatusCheckHealthCheckPathsDestinations <a name="Ec2ApplicationStatusCheckHealthCheckPathsDestinations" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinations.Initializer"></a>

```typescript
import { ec2ApplicationStatusCheck } from '@cdktn/provider-awscc'

const ec2ApplicationStatusCheckHealthCheckPathsDestinations: ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinations.property.securityGroupId">securityGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#security_group_id Ec2ApplicationStatusCheck#security_group_id}. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinations.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#subnet_id Ec2ApplicationStatusCheck#subnet_id}. |

---

##### `securityGroupId`<sup>Optional</sup> <a name="securityGroupId" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinations.property.securityGroupId"></a>

```typescript
public readonly securityGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#security_group_id Ec2ApplicationStatusCheck#security_group_id}.

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinations.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#subnet_id Ec2ApplicationStatusCheck#subnet_id}.

---

### Ec2ApplicationStatusCheckHealthCheckPathsSource <a name="Ec2ApplicationStatusCheckHealthCheckPathsSource" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSource.Initializer"></a>

```typescript
import { ec2ApplicationStatusCheck } from '@cdktn/provider-awscc'

const ec2ApplicationStatusCheckHealthCheckPathsSource: ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSource.property.securityGroupId">securityGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#security_group_id Ec2ApplicationStatusCheck#security_group_id}. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSource.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#subnet_id Ec2ApplicationStatusCheck#subnet_id}. |

---

##### `securityGroupId`<sup>Optional</sup> <a name="securityGroupId" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSource.property.securityGroupId"></a>

```typescript
public readonly securityGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#security_group_id Ec2ApplicationStatusCheck#security_group_id}.

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSource.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#subnet_id Ec2ApplicationStatusCheck#subnet_id}.

---

### Ec2ApplicationStatusCheckTags <a name="Ec2ApplicationStatusCheckTags" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTags.Initializer"></a>

```typescript
import { ec2ApplicationStatusCheck } from '@cdktn/provider-awscc'

const ec2ApplicationStatusCheckTags: ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#key Ec2ApplicationStatusCheck#key}. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#value Ec2ApplicationStatusCheck#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#key Ec2ApplicationStatusCheck#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#value Ec2ApplicationStatusCheck#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList <a name="Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.Initializer"></a>

```typescript
import { ec2ApplicationStatusCheck } from '@cdktn/provider-awscc'

new ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.get"></a>

```typescript
public get(index: number): Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinations">Ec2ApplicationStatusCheckHealthCheckPathsDestinations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2ApplicationStatusCheckHealthCheckPathsDestinations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinations">Ec2ApplicationStatusCheckHealthCheckPathsDestinations</a>[]

---


### Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference <a name="Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.Initializer"></a>

```typescript
import { ec2ApplicationStatusCheck } from '@cdktn/provider-awscc'

new ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.resetSecurityGroupId">resetSecurityGroupId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.resetSubnetId">resetSubnetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecurityGroupId` <a name="resetSecurityGroupId" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.resetSecurityGroupId"></a>

```typescript
public resetSecurityGroupId(): void
```

##### `resetSubnetId` <a name="resetSubnetId" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.resetSubnetId"></a>

```typescript
public resetSubnetId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.property.securityGroupIdInput">securityGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.property.securityGroupId">securityGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinations">Ec2ApplicationStatusCheckHealthCheckPathsDestinations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `securityGroupIdInput`<sup>Optional</sup> <a name="securityGroupIdInput" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.property.securityGroupIdInput"></a>

```typescript
public readonly securityGroupIdInput: string;
```

- *Type:* string

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `securityGroupId`<sup>Required</sup> <a name="securityGroupId" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.property.securityGroupId"></a>

```typescript
public readonly securityGroupId: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2ApplicationStatusCheckHealthCheckPathsDestinations;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinations">Ec2ApplicationStatusCheckHealthCheckPathsDestinations</a>

---


### Ec2ApplicationStatusCheckHealthCheckPathsList <a name="Ec2ApplicationStatusCheckHealthCheckPathsList" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.Initializer"></a>

```typescript
import { ec2ApplicationStatusCheck } from '@cdktn/provider-awscc'

new ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.get"></a>

```typescript
public get(index: number): Ec2ApplicationStatusCheckHealthCheckPathsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPaths">Ec2ApplicationStatusCheckHealthCheckPaths</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2ApplicationStatusCheckHealthCheckPaths[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPaths">Ec2ApplicationStatusCheckHealthCheckPaths</a>[]

---


### Ec2ApplicationStatusCheckHealthCheckPathsOutputReference <a name="Ec2ApplicationStatusCheckHealthCheckPathsOutputReference" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.Initializer"></a>

```typescript
import { ec2ApplicationStatusCheck } from '@cdktn/provider-awscc'

new ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.putDestinations">putDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.putSource">putSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.resetDestinations">resetDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.resetSource">resetSource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDestinations` <a name="putDestinations" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.putDestinations"></a>

```typescript
public putDestinations(value: IResolvable | Ec2ApplicationStatusCheckHealthCheckPathsDestinations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.putDestinations.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinations">Ec2ApplicationStatusCheckHealthCheckPathsDestinations</a>[]

---

##### `putSource` <a name="putSource" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.putSource"></a>

```typescript
public putSource(value: Ec2ApplicationStatusCheckHealthCheckPathsSource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSource">Ec2ApplicationStatusCheckHealthCheckPathsSource</a>

---

##### `resetDestinations` <a name="resetDestinations" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.resetDestinations"></a>

```typescript
public resetDestinations(): void
```

##### `resetSource` <a name="resetSource" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.resetSource"></a>

```typescript
public resetSource(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.property.destinations">destinations</a></code> | <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList">Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.property.source">source</a></code> | <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference">Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.property.destinationsInput">destinationsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinations">Ec2ApplicationStatusCheckHealthCheckPathsDestinations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.property.sourceInput">sourceInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSource">Ec2ApplicationStatusCheckHealthCheckPathsSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPaths">Ec2ApplicationStatusCheckHealthCheckPaths</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.property.destinations"></a>

```typescript
public readonly destinations: Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList">Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList</a>

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.property.source"></a>

```typescript
public readonly source: Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference">Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference</a>

---

##### `destinationsInput`<sup>Optional</sup> <a name="destinationsInput" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.property.destinationsInput"></a>

```typescript
public readonly destinationsInput: IResolvable | Ec2ApplicationStatusCheckHealthCheckPathsDestinations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinations">Ec2ApplicationStatusCheckHealthCheckPathsDestinations</a>[]

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.property.sourceInput"></a>

```typescript
public readonly sourceInput: IResolvable | Ec2ApplicationStatusCheckHealthCheckPathsSource;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSource">Ec2ApplicationStatusCheckHealthCheckPathsSource</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2ApplicationStatusCheckHealthCheckPaths;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPaths">Ec2ApplicationStatusCheckHealthCheckPaths</a>

---


### Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference <a name="Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.Initializer"></a>

```typescript
import { ec2ApplicationStatusCheck } from '@cdktn/provider-awscc'

new ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.resetSecurityGroupId">resetSecurityGroupId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.resetSubnetId">resetSubnetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecurityGroupId` <a name="resetSecurityGroupId" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.resetSecurityGroupId"></a>

```typescript
public resetSecurityGroupId(): void
```

##### `resetSubnetId` <a name="resetSubnetId" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.resetSubnetId"></a>

```typescript
public resetSubnetId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.property.securityGroupIdInput">securityGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.property.securityGroupId">securityGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSource">Ec2ApplicationStatusCheckHealthCheckPathsSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `securityGroupIdInput`<sup>Optional</sup> <a name="securityGroupIdInput" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.property.securityGroupIdInput"></a>

```typescript
public readonly securityGroupIdInput: string;
```

- *Type:* string

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `securityGroupId`<sup>Required</sup> <a name="securityGroupId" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.property.securityGroupId"></a>

```typescript
public readonly securityGroupId: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2ApplicationStatusCheckHealthCheckPathsSource;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSource">Ec2ApplicationStatusCheckHealthCheckPathsSource</a>

---


### Ec2ApplicationStatusCheckTagsList <a name="Ec2ApplicationStatusCheckTagsList" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.Initializer"></a>

```typescript
import { ec2ApplicationStatusCheck } from '@cdktn/provider-awscc'

new ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.get"></a>

```typescript
public get(index: number): Ec2ApplicationStatusCheckTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTags">Ec2ApplicationStatusCheckTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2ApplicationStatusCheckTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTags">Ec2ApplicationStatusCheckTags</a>[]

---


### Ec2ApplicationStatusCheckTagsOutputReference <a name="Ec2ApplicationStatusCheckTagsOutputReference" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.Initializer"></a>

```typescript
import { ec2ApplicationStatusCheck } from '@cdktn/provider-awscc'

new ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTags">Ec2ApplicationStatusCheckTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2ApplicationStatusCheckTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTags">Ec2ApplicationStatusCheckTags</a>

---



