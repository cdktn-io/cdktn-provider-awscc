# `servicediscoveryService` Submodule <a name="`servicediscoveryService` Submodule" id="@cdktn/provider-awscc.servicediscoveryService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicediscoveryService <a name="ServicediscoveryService" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicediscovery_service awscc_servicediscovery_service}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.Initializer"></a>

```typescript
import { servicediscoveryService } from '@cdktn/provider-awscc'

new servicediscoveryService.ServicediscoveryService(scope: Construct, id: string, config?: ServicediscoveryServiceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceConfig">ServicediscoveryServiceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceConfig">ServicediscoveryServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.putDnsConfig">putDnsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.putHealthCheckConfig">putHealthCheckConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.putHealthCheckCustomConfig">putHealthCheckCustomConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.resetDnsConfig">resetDnsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.resetHealthCheckConfig">resetHealthCheckConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.resetHealthCheckCustomConfig">resetHealthCheckCustomConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.resetNamespaceId">resetNamespaceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.resetServiceAttributes">resetServiceAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDnsConfig` <a name="putDnsConfig" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.putDnsConfig"></a>

```typescript
public putDnsConfig(value: ServicediscoveryServiceDnsConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.putDnsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfig">ServicediscoveryServiceDnsConfig</a>

---

##### `putHealthCheckConfig` <a name="putHealthCheckConfig" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.putHealthCheckConfig"></a>

```typescript
public putHealthCheckConfig(value: ServicediscoveryServiceHealthCheckConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.putHealthCheckConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfig">ServicediscoveryServiceHealthCheckConfig</a>

---

##### `putHealthCheckCustomConfig` <a name="putHealthCheckCustomConfig" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.putHealthCheckCustomConfig"></a>

```typescript
public putHealthCheckCustomConfig(value: ServicediscoveryServiceHealthCheckCustomConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.putHealthCheckCustomConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfig">ServicediscoveryServiceHealthCheckCustomConfig</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.putTags"></a>

```typescript
public putTags(value: IResolvable | ServicediscoveryServiceTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTags">ServicediscoveryServiceTags</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDnsConfig` <a name="resetDnsConfig" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.resetDnsConfig"></a>

```typescript
public resetDnsConfig(): void
```

##### `resetHealthCheckConfig` <a name="resetHealthCheckConfig" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.resetHealthCheckConfig"></a>

```typescript
public resetHealthCheckConfig(): void
```

##### `resetHealthCheckCustomConfig` <a name="resetHealthCheckCustomConfig" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.resetHealthCheckCustomConfig"></a>

```typescript
public resetHealthCheckCustomConfig(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNamespaceId` <a name="resetNamespaceId" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.resetNamespaceId"></a>

```typescript
public resetNamespaceId(): void
```

##### `resetServiceAttributes` <a name="resetServiceAttributes" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.resetServiceAttributes"></a>

```typescript
public resetServiceAttributes(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.resetType"></a>

```typescript
public resetType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ServicediscoveryService resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.isConstruct"></a>

```typescript
import { servicediscoveryService } from '@cdktn/provider-awscc'

servicediscoveryService.ServicediscoveryService.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.isTerraformElement"></a>

```typescript
import { servicediscoveryService } from '@cdktn/provider-awscc'

servicediscoveryService.ServicediscoveryService.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.isTerraformResource"></a>

```typescript
import { servicediscoveryService } from '@cdktn/provider-awscc'

servicediscoveryService.ServicediscoveryService.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.generateConfigForImport"></a>

```typescript
import { servicediscoveryService } from '@cdktn/provider-awscc'

servicediscoveryService.ServicediscoveryService.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ServicediscoveryService resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ServicediscoveryService to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ServicediscoveryService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicediscovery_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ServicediscoveryService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.dnsConfig">dnsConfig</a></code> | <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference">ServicediscoveryServiceDnsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.healthCheckConfig">healthCheckConfig</a></code> | <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference">ServicediscoveryServiceHealthCheckConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.healthCheckCustomConfig">healthCheckCustomConfig</a></code> | <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference">ServicediscoveryServiceHealthCheckCustomConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.serviceId">serviceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsList">ServicediscoveryServiceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.dnsConfigInput">dnsConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfig">ServicediscoveryServiceDnsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.healthCheckConfigInput">healthCheckConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfig">ServicediscoveryServiceHealthCheckConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.healthCheckCustomConfigInput">healthCheckCustomConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfig">ServicediscoveryServiceHealthCheckCustomConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.namespaceIdInput">namespaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.serviceAttributesInput">serviceAttributesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTags">ServicediscoveryServiceTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.namespaceId">namespaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.serviceAttributes">serviceAttributes</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `dnsConfig`<sup>Required</sup> <a name="dnsConfig" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.dnsConfig"></a>

```typescript
public readonly dnsConfig: ServicediscoveryServiceDnsConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference">ServicediscoveryServiceDnsConfigOutputReference</a>

---

##### `healthCheckConfig`<sup>Required</sup> <a name="healthCheckConfig" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.healthCheckConfig"></a>

```typescript
public readonly healthCheckConfig: ServicediscoveryServiceHealthCheckConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference">ServicediscoveryServiceHealthCheckConfigOutputReference</a>

---

##### `healthCheckCustomConfig`<sup>Required</sup> <a name="healthCheckCustomConfig" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.healthCheckCustomConfig"></a>

```typescript
public readonly healthCheckCustomConfig: ServicediscoveryServiceHealthCheckCustomConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference">ServicediscoveryServiceHealthCheckCustomConfigOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.serviceId"></a>

```typescript
public readonly serviceId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.tags"></a>

```typescript
public readonly tags: ServicediscoveryServiceTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsList">ServicediscoveryServiceTagsList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `dnsConfigInput`<sup>Optional</sup> <a name="dnsConfigInput" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.dnsConfigInput"></a>

```typescript
public readonly dnsConfigInput: IResolvable | ServicediscoveryServiceDnsConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfig">ServicediscoveryServiceDnsConfig</a>

---

##### `healthCheckConfigInput`<sup>Optional</sup> <a name="healthCheckConfigInput" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.healthCheckConfigInput"></a>

```typescript
public readonly healthCheckConfigInput: IResolvable | ServicediscoveryServiceHealthCheckConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfig">ServicediscoveryServiceHealthCheckConfig</a>

---

##### `healthCheckCustomConfigInput`<sup>Optional</sup> <a name="healthCheckCustomConfigInput" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.healthCheckCustomConfigInput"></a>

```typescript
public readonly healthCheckCustomConfigInput: IResolvable | ServicediscoveryServiceHealthCheckCustomConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfig">ServicediscoveryServiceHealthCheckCustomConfig</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceIdInput`<sup>Optional</sup> <a name="namespaceIdInput" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.namespaceIdInput"></a>

```typescript
public readonly namespaceIdInput: string;
```

- *Type:* string

---

##### `serviceAttributesInput`<sup>Optional</sup> <a name="serviceAttributesInput" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.serviceAttributesInput"></a>

```typescript
public readonly serviceAttributesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | ServicediscoveryServiceTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTags">ServicediscoveryServiceTags</a>[]

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespaceId`<sup>Required</sup> <a name="namespaceId" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.namespaceId"></a>

```typescript
public readonly namespaceId: string;
```

- *Type:* string

---

##### `serviceAttributes`<sup>Required</sup> <a name="serviceAttributes" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.serviceAttributes"></a>

```typescript
public readonly serviceAttributes: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ServicediscoveryServiceConfig <a name="ServicediscoveryServiceConfig" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceConfig.Initializer"></a>

```typescript
import { servicediscoveryService } from '@cdktn/provider-awscc'

const servicediscoveryServiceConfig: servicediscoveryService.ServicediscoveryServiceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceConfig.property.description">description</a></code> | <code>string</code> | A description for the service. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceConfig.property.dnsConfig">dnsConfig</a></code> | <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfig">ServicediscoveryServiceDnsConfig</a></code> | DNS-related configurations for the service. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceConfig.property.healthCheckConfig">healthCheckConfig</a></code> | <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfig">ServicediscoveryServiceHealthCheckConfig</a></code> | Settings for health checks. Used when routing is DNS-based. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceConfig.property.healthCheckCustomConfig">healthCheckCustomConfig</a></code> | <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfig">ServicediscoveryServiceHealthCheckCustomConfig</a></code> | Settings for custom health checks. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceConfig.property.name">name</a></code> | <code>string</code> | The name of the service. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceConfig.property.namespaceId">namespaceId</a></code> | <code>string</code> | The ID of the namespace in which the service is created. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceConfig.property.serviceAttributes">serviceAttributes</a></code> | <code>{[ key: string ]: string}</code> | A string map that contains attributes and values for the service. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTags">ServicediscoveryServiceTags</a>[]</code> | An array of key-value pairs to associate with the service. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceConfig.property.type">type</a></code> | <code>string</code> | The type of service. Supported values are HTTP or DNS. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description for the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicediscovery_service#description ServicediscoveryService#description}

---

##### `dnsConfig`<sup>Optional</sup> <a name="dnsConfig" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceConfig.property.dnsConfig"></a>

```typescript
public readonly dnsConfig: ServicediscoveryServiceDnsConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfig">ServicediscoveryServiceDnsConfig</a>

DNS-related configurations for the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicediscovery_service#dns_config ServicediscoveryService#dns_config}

---

##### `healthCheckConfig`<sup>Optional</sup> <a name="healthCheckConfig" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceConfig.property.healthCheckConfig"></a>

```typescript
public readonly healthCheckConfig: ServicediscoveryServiceHealthCheckConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfig">ServicediscoveryServiceHealthCheckConfig</a>

Settings for health checks. Used when routing is DNS-based.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicediscovery_service#health_check_config ServicediscoveryService#health_check_config}

---

##### `healthCheckCustomConfig`<sup>Optional</sup> <a name="healthCheckCustomConfig" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceConfig.property.healthCheckCustomConfig"></a>

```typescript
public readonly healthCheckCustomConfig: ServicediscoveryServiceHealthCheckCustomConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfig">ServicediscoveryServiceHealthCheckCustomConfig</a>

Settings for custom health checks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicediscovery_service#health_check_custom_config ServicediscoveryService#health_check_custom_config}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicediscovery_service#name ServicediscoveryService#name}

---

##### `namespaceId`<sup>Optional</sup> <a name="namespaceId" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceConfig.property.namespaceId"></a>

```typescript
public readonly namespaceId: string;
```

- *Type:* string

The ID of the namespace in which the service is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicediscovery_service#namespace_id ServicediscoveryService#namespace_id}

---

##### `serviceAttributes`<sup>Optional</sup> <a name="serviceAttributes" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceConfig.property.serviceAttributes"></a>

```typescript
public readonly serviceAttributes: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A string map that contains attributes and values for the service.

You can specify a maximum of 30 key-value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicediscovery_service#service_attributes ServicediscoveryService#service_attributes}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | ServicediscoveryServiceTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTags">ServicediscoveryServiceTags</a>[]

An array of key-value pairs to associate with the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicediscovery_service#tags ServicediscoveryService#tags}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of service. Supported values are HTTP or DNS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicediscovery_service#type ServicediscoveryService#type}

---

### ServicediscoveryServiceDnsConfig <a name="ServicediscoveryServiceDnsConfig" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfig.Initializer"></a>

```typescript
import { servicediscoveryService } from '@cdktn/provider-awscc'

const servicediscoveryServiceDnsConfig: servicediscoveryService.ServicediscoveryServiceDnsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfig.property.dnsRecords">dnsRecords</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecords">ServicediscoveryServiceDnsConfigDnsRecords</a>[]</code> | A list of DNS records associated with the service. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfig.property.namespaceId">namespaceId</a></code> | <code>string</code> | The ID of the namespace for the DNS configuration. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfig.property.routingPolicy">routingPolicy</a></code> | <code>string</code> | The routing policy to use for DNS queries. |

---

##### `dnsRecords`<sup>Optional</sup> <a name="dnsRecords" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfig.property.dnsRecords"></a>

```typescript
public readonly dnsRecords: IResolvable | ServicediscoveryServiceDnsConfigDnsRecords[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecords">ServicediscoveryServiceDnsConfigDnsRecords</a>[]

A list of DNS records associated with the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicediscovery_service#dns_records ServicediscoveryService#dns_records}

---

##### `namespaceId`<sup>Optional</sup> <a name="namespaceId" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfig.property.namespaceId"></a>

```typescript
public readonly namespaceId: string;
```

- *Type:* string

The ID of the namespace for the DNS configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicediscovery_service#namespace_id ServicediscoveryService#namespace_id}

---

##### `routingPolicy`<sup>Optional</sup> <a name="routingPolicy" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfig.property.routingPolicy"></a>

```typescript
public readonly routingPolicy: string;
```

- *Type:* string

The routing policy to use for DNS queries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicediscovery_service#routing_policy ServicediscoveryService#routing_policy}

---

### ServicediscoveryServiceDnsConfigDnsRecords <a name="ServicediscoveryServiceDnsConfigDnsRecords" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecords"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecords.Initializer"></a>

```typescript
import { servicediscoveryService } from '@cdktn/provider-awscc'

const servicediscoveryServiceDnsConfigDnsRecords: servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecords = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecords.property.ttl">ttl</a></code> | <code>number</code> | The time-to-live (TTL) for the DNS record. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecords.property.type">type</a></code> | <code>string</code> | The DNS record type (e.g., A, AAAA, SRV). |

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecords.property.ttl"></a>

```typescript
public readonly ttl: number;
```

- *Type:* number

The time-to-live (TTL) for the DNS record.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicediscovery_service#ttl ServicediscoveryService#ttl}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecords.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The DNS record type (e.g., A, AAAA, SRV).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicediscovery_service#type ServicediscoveryService#type}

---

### ServicediscoveryServiceHealthCheckConfig <a name="ServicediscoveryServiceHealthCheckConfig" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfig.Initializer"></a>

```typescript
import { servicediscoveryService } from '@cdktn/provider-awscc'

const servicediscoveryServiceHealthCheckConfig: servicediscoveryService.ServicediscoveryServiceHealthCheckConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfig.property.failureThreshold">failureThreshold</a></code> | <code>number</code> | The number of consecutive health check failures that must occur before declaring the service unhealthy. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfig.property.resourcePath">resourcePath</a></code> | <code>string</code> | The path to ping on the service for health checks. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfig.property.type">type</a></code> | <code>string</code> | The type of health check (e.g., HTTP, HTTPS, TCP). |

---

##### `failureThreshold`<sup>Optional</sup> <a name="failureThreshold" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfig.property.failureThreshold"></a>

```typescript
public readonly failureThreshold: number;
```

- *Type:* number

The number of consecutive health check failures that must occur before declaring the service unhealthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicediscovery_service#failure_threshold ServicediscoveryService#failure_threshold}

---

##### `resourcePath`<sup>Optional</sup> <a name="resourcePath" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfig.property.resourcePath"></a>

```typescript
public readonly resourcePath: string;
```

- *Type:* string

The path to ping on the service for health checks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicediscovery_service#resource_path ServicediscoveryService#resource_path}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of health check (e.g., HTTP, HTTPS, TCP).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicediscovery_service#type ServicediscoveryService#type}

---

### ServicediscoveryServiceHealthCheckCustomConfig <a name="ServicediscoveryServiceHealthCheckCustomConfig" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfig.Initializer"></a>

```typescript
import { servicediscoveryService } from '@cdktn/provider-awscc'

const servicediscoveryServiceHealthCheckCustomConfig: servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfig.property.failureThreshold">failureThreshold</a></code> | <code>number</code> | The number of consecutive health check failures required before the service is considered unhealthy. |

---

##### `failureThreshold`<sup>Optional</sup> <a name="failureThreshold" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfig.property.failureThreshold"></a>

```typescript
public readonly failureThreshold: number;
```

- *Type:* number

The number of consecutive health check failures required before the service is considered unhealthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicediscovery_service#failure_threshold ServicediscoveryService#failure_threshold}

---

### ServicediscoveryServiceTags <a name="ServicediscoveryServiceTags" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTags.Initializer"></a>

```typescript
import { servicediscoveryService } from '@cdktn/provider-awscc'

const servicediscoveryServiceTags: servicediscoveryService.ServicediscoveryServiceTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTags.property.value">value</a></code> | <code>string</code> | The value of the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicediscovery_service#key ServicediscoveryService#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicediscovery_service#value ServicediscoveryService#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ServicediscoveryServiceDnsConfigDnsRecordsList <a name="ServicediscoveryServiceDnsConfigDnsRecordsList" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsList.Initializer"></a>

```typescript
import { servicediscoveryService } from '@cdktn/provider-awscc'

new servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsList.get"></a>

```typescript
public get(index: number): ServicediscoveryServiceDnsConfigDnsRecordsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecords">ServicediscoveryServiceDnsConfigDnsRecords</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServicediscoveryServiceDnsConfigDnsRecords[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecords">ServicediscoveryServiceDnsConfigDnsRecords</a>[]

---


### ServicediscoveryServiceDnsConfigDnsRecordsOutputReference <a name="ServicediscoveryServiceDnsConfigDnsRecordsOutputReference" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.Initializer"></a>

```typescript
import { servicediscoveryService } from '@cdktn/provider-awscc'

new servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.resetTtl">resetTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTtl` <a name="resetTtl" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.resetTtl"></a>

```typescript
public resetTtl(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.property.ttlInput">ttlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.property.ttl">ttl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecords">ServicediscoveryServiceDnsConfigDnsRecords</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.property.ttlInput"></a>

```typescript
public readonly ttlInput: number;
```

- *Type:* number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.property.ttl"></a>

```typescript
public readonly ttl: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServicediscoveryServiceDnsConfigDnsRecords;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecords">ServicediscoveryServiceDnsConfigDnsRecords</a>

---


### ServicediscoveryServiceDnsConfigOutputReference <a name="ServicediscoveryServiceDnsConfigOutputReference" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.Initializer"></a>

```typescript
import { servicediscoveryService } from '@cdktn/provider-awscc'

new servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.putDnsRecords">putDnsRecords</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.resetDnsRecords">resetDnsRecords</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.resetNamespaceId">resetNamespaceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.resetRoutingPolicy">resetRoutingPolicy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDnsRecords` <a name="putDnsRecords" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.putDnsRecords"></a>

```typescript
public putDnsRecords(value: IResolvable | ServicediscoveryServiceDnsConfigDnsRecords[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.putDnsRecords.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecords">ServicediscoveryServiceDnsConfigDnsRecords</a>[]

---

##### `resetDnsRecords` <a name="resetDnsRecords" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.resetDnsRecords"></a>

```typescript
public resetDnsRecords(): void
```

##### `resetNamespaceId` <a name="resetNamespaceId" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.resetNamespaceId"></a>

```typescript
public resetNamespaceId(): void
```

##### `resetRoutingPolicy` <a name="resetRoutingPolicy" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.resetRoutingPolicy"></a>

```typescript
public resetRoutingPolicy(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.property.dnsRecords">dnsRecords</a></code> | <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsList">ServicediscoveryServiceDnsConfigDnsRecordsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.property.dnsRecordsInput">dnsRecordsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecords">ServicediscoveryServiceDnsConfigDnsRecords</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.property.namespaceIdInput">namespaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.property.routingPolicyInput">routingPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.property.namespaceId">namespaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.property.routingPolicy">routingPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfig">ServicediscoveryServiceDnsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dnsRecords`<sup>Required</sup> <a name="dnsRecords" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.property.dnsRecords"></a>

```typescript
public readonly dnsRecords: ServicediscoveryServiceDnsConfigDnsRecordsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsList">ServicediscoveryServiceDnsConfigDnsRecordsList</a>

---

##### `dnsRecordsInput`<sup>Optional</sup> <a name="dnsRecordsInput" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.property.dnsRecordsInput"></a>

```typescript
public readonly dnsRecordsInput: IResolvable | ServicediscoveryServiceDnsConfigDnsRecords[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecords">ServicediscoveryServiceDnsConfigDnsRecords</a>[]

---

##### `namespaceIdInput`<sup>Optional</sup> <a name="namespaceIdInput" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.property.namespaceIdInput"></a>

```typescript
public readonly namespaceIdInput: string;
```

- *Type:* string

---

##### `routingPolicyInput`<sup>Optional</sup> <a name="routingPolicyInput" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.property.routingPolicyInput"></a>

```typescript
public readonly routingPolicyInput: string;
```

- *Type:* string

---

##### `namespaceId`<sup>Required</sup> <a name="namespaceId" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.property.namespaceId"></a>

```typescript
public readonly namespaceId: string;
```

- *Type:* string

---

##### `routingPolicy`<sup>Required</sup> <a name="routingPolicy" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.property.routingPolicy"></a>

```typescript
public readonly routingPolicy: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServicediscoveryServiceDnsConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfig">ServicediscoveryServiceDnsConfig</a>

---


### ServicediscoveryServiceHealthCheckConfigOutputReference <a name="ServicediscoveryServiceHealthCheckConfigOutputReference" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.Initializer"></a>

```typescript
import { servicediscoveryService } from '@cdktn/provider-awscc'

new servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.resetFailureThreshold">resetFailureThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.resetResourcePath">resetResourcePath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFailureThreshold` <a name="resetFailureThreshold" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.resetFailureThreshold"></a>

```typescript
public resetFailureThreshold(): void
```

##### `resetResourcePath` <a name="resetResourcePath" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.resetResourcePath"></a>

```typescript
public resetResourcePath(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.property.failureThresholdInput">failureThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.property.resourcePathInput">resourcePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.property.failureThreshold">failureThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.property.resourcePath">resourcePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfig">ServicediscoveryServiceHealthCheckConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `failureThresholdInput`<sup>Optional</sup> <a name="failureThresholdInput" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.property.failureThresholdInput"></a>

```typescript
public readonly failureThresholdInput: number;
```

- *Type:* number

---

##### `resourcePathInput`<sup>Optional</sup> <a name="resourcePathInput" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.property.resourcePathInput"></a>

```typescript
public readonly resourcePathInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `failureThreshold`<sup>Required</sup> <a name="failureThreshold" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.property.failureThreshold"></a>

```typescript
public readonly failureThreshold: number;
```

- *Type:* number

---

##### `resourcePath`<sup>Required</sup> <a name="resourcePath" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.property.resourcePath"></a>

```typescript
public readonly resourcePath: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServicediscoveryServiceHealthCheckConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfig">ServicediscoveryServiceHealthCheckConfig</a>

---


### ServicediscoveryServiceHealthCheckCustomConfigOutputReference <a name="ServicediscoveryServiceHealthCheckCustomConfigOutputReference" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.Initializer"></a>

```typescript
import { servicediscoveryService } from '@cdktn/provider-awscc'

new servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.resetFailureThreshold">resetFailureThreshold</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFailureThreshold` <a name="resetFailureThreshold" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.resetFailureThreshold"></a>

```typescript
public resetFailureThreshold(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.property.failureThresholdInput">failureThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.property.failureThreshold">failureThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfig">ServicediscoveryServiceHealthCheckCustomConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `failureThresholdInput`<sup>Optional</sup> <a name="failureThresholdInput" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.property.failureThresholdInput"></a>

```typescript
public readonly failureThresholdInput: number;
```

- *Type:* number

---

##### `failureThreshold`<sup>Required</sup> <a name="failureThreshold" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.property.failureThreshold"></a>

```typescript
public readonly failureThreshold: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServicediscoveryServiceHealthCheckCustomConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfig">ServicediscoveryServiceHealthCheckCustomConfig</a>

---


### ServicediscoveryServiceTagsList <a name="ServicediscoveryServiceTagsList" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsList.Initializer"></a>

```typescript
import { servicediscoveryService } from '@cdktn/provider-awscc'

new servicediscoveryService.ServicediscoveryServiceTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsList.get"></a>

```typescript
public get(index: number): ServicediscoveryServiceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTags">ServicediscoveryServiceTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServicediscoveryServiceTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTags">ServicediscoveryServiceTags</a>[]

---


### ServicediscoveryServiceTagsOutputReference <a name="ServicediscoveryServiceTagsOutputReference" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.Initializer"></a>

```typescript
import { servicediscoveryService } from '@cdktn/provider-awscc'

new servicediscoveryService.ServicediscoveryServiceTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTags">ServicediscoveryServiceTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServicediscoveryServiceTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTags">ServicediscoveryServiceTags</a>

---



