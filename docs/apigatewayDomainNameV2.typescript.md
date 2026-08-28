# `apigatewayDomainNameV2` Submodule <a name="`apigatewayDomainNameV2` Submodule" id="@cdktn/provider-awscc.apigatewayDomainNameV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigatewayDomainNameV2 <a name="ApigatewayDomainNameV2" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_domain_name_v2 awscc_apigateway_domain_name_v2}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.Initializer"></a>

```typescript
import { apigatewayDomainNameV2 } from '@cdktn/provider-awscc'

new apigatewayDomainNameV2.ApigatewayDomainNameV2(scope: Construct, id: string, config?: ApigatewayDomainNameV2Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2Config">ApigatewayDomainNameV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2Config">ApigatewayDomainNameV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.putEndpointConfiguration">putEndpointConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.resetCertificateArn">resetCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.resetDomainName">resetDomainName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.resetEndpointAccessMode">resetEndpointAccessMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.resetEndpointConfiguration">resetEndpointConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.resetPolicy">resetPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.resetRoutingMode">resetRoutingMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.resetSecurityPolicy">resetSecurityPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEndpointConfiguration` <a name="putEndpointConfiguration" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.putEndpointConfiguration"></a>

```typescript
public putEndpointConfiguration(value: ApigatewayDomainNameV2EndpointConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.putEndpointConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfiguration">ApigatewayDomainNameV2EndpointConfiguration</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.putTags"></a>

```typescript
public putTags(value: IResolvable | ApigatewayDomainNameV2Tags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2Tags">ApigatewayDomainNameV2Tags</a>[]

---

##### `resetCertificateArn` <a name="resetCertificateArn" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.resetCertificateArn"></a>

```typescript
public resetCertificateArn(): void
```

##### `resetDomainName` <a name="resetDomainName" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.resetDomainName"></a>

```typescript
public resetDomainName(): void
```

##### `resetEndpointAccessMode` <a name="resetEndpointAccessMode" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.resetEndpointAccessMode"></a>

```typescript
public resetEndpointAccessMode(): void
```

##### `resetEndpointConfiguration` <a name="resetEndpointConfiguration" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.resetEndpointConfiguration"></a>

```typescript
public resetEndpointConfiguration(): void
```

##### `resetPolicy` <a name="resetPolicy" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.resetPolicy"></a>

```typescript
public resetPolicy(): void
```

##### `resetRoutingMode` <a name="resetRoutingMode" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.resetRoutingMode"></a>

```typescript
public resetRoutingMode(): void
```

##### `resetSecurityPolicy` <a name="resetSecurityPolicy" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.resetSecurityPolicy"></a>

```typescript
public resetSecurityPolicy(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ApigatewayDomainNameV2 resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.isConstruct"></a>

```typescript
import { apigatewayDomainNameV2 } from '@cdktn/provider-awscc'

apigatewayDomainNameV2.ApigatewayDomainNameV2.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.isTerraformElement"></a>

```typescript
import { apigatewayDomainNameV2 } from '@cdktn/provider-awscc'

apigatewayDomainNameV2.ApigatewayDomainNameV2.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.isTerraformResource"></a>

```typescript
import { apigatewayDomainNameV2 } from '@cdktn/provider-awscc'

apigatewayDomainNameV2.ApigatewayDomainNameV2.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.generateConfigForImport"></a>

```typescript
import { apigatewayDomainNameV2 } from '@cdktn/provider-awscc'

apigatewayDomainNameV2.ApigatewayDomainNameV2.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ApigatewayDomainNameV2 resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApigatewayDomainNameV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApigatewayDomainNameV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_domain_name_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ApigatewayDomainNameV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.domainNameArn">domainNameArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.domainNameId">domainNameId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.endpointConfiguration">endpointConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference">ApigatewayDomainNameV2EndpointConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsList">ApigatewayDomainNameV2TagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.certificateArnInput">certificateArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.domainNameInput">domainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.endpointAccessModeInput">endpointAccessModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.endpointConfigurationInput">endpointConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfiguration">ApigatewayDomainNameV2EndpointConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.policyInput">policyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.routingModeInput">routingModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.securityPolicyInput">securityPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2Tags">ApigatewayDomainNameV2Tags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.certificateArn">certificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.endpointAccessMode">endpointAccessMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.policy">policy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.routingMode">routingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.securityPolicy">securityPolicy</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `domainNameArn`<sup>Required</sup> <a name="domainNameArn" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.domainNameArn"></a>

```typescript
public readonly domainNameArn: string;
```

- *Type:* string

---

##### `domainNameId`<sup>Required</sup> <a name="domainNameId" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.domainNameId"></a>

```typescript
public readonly domainNameId: string;
```

- *Type:* string

---

##### `endpointConfiguration`<sup>Required</sup> <a name="endpointConfiguration" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.endpointConfiguration"></a>

```typescript
public readonly endpointConfiguration: ApigatewayDomainNameV2EndpointConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference">ApigatewayDomainNameV2EndpointConfigurationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.tags"></a>

```typescript
public readonly tags: ApigatewayDomainNameV2TagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsList">ApigatewayDomainNameV2TagsList</a>

---

##### `certificateArnInput`<sup>Optional</sup> <a name="certificateArnInput" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.certificateArnInput"></a>

```typescript
public readonly certificateArnInput: string;
```

- *Type:* string

---

##### `domainNameInput`<sup>Optional</sup> <a name="domainNameInput" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.domainNameInput"></a>

```typescript
public readonly domainNameInput: string;
```

- *Type:* string

---

##### `endpointAccessModeInput`<sup>Optional</sup> <a name="endpointAccessModeInput" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.endpointAccessModeInput"></a>

```typescript
public readonly endpointAccessModeInput: string;
```

- *Type:* string

---

##### `endpointConfigurationInput`<sup>Optional</sup> <a name="endpointConfigurationInput" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.endpointConfigurationInput"></a>

```typescript
public readonly endpointConfigurationInput: IResolvable | ApigatewayDomainNameV2EndpointConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfiguration">ApigatewayDomainNameV2EndpointConfiguration</a>

---

##### `policyInput`<sup>Optional</sup> <a name="policyInput" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.policyInput"></a>

```typescript
public readonly policyInput: string;
```

- *Type:* string

---

##### `routingModeInput`<sup>Optional</sup> <a name="routingModeInput" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.routingModeInput"></a>

```typescript
public readonly routingModeInput: string;
```

- *Type:* string

---

##### `securityPolicyInput`<sup>Optional</sup> <a name="securityPolicyInput" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.securityPolicyInput"></a>

```typescript
public readonly securityPolicyInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | ApigatewayDomainNameV2Tags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2Tags">ApigatewayDomainNameV2Tags</a>[]

---

##### `certificateArn`<sup>Required</sup> <a name="certificateArn" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.certificateArn"></a>

```typescript
public readonly certificateArn: string;
```

- *Type:* string

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `endpointAccessMode`<sup>Required</sup> <a name="endpointAccessMode" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.endpointAccessMode"></a>

```typescript
public readonly endpointAccessMode: string;
```

- *Type:* string

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.policy"></a>

```typescript
public readonly policy: string;
```

- *Type:* string

---

##### `routingMode`<sup>Required</sup> <a name="routingMode" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.routingMode"></a>

```typescript
public readonly routingMode: string;
```

- *Type:* string

---

##### `securityPolicy`<sup>Required</sup> <a name="securityPolicy" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.securityPolicy"></a>

```typescript
public readonly securityPolicy: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApigatewayDomainNameV2Config <a name="ApigatewayDomainNameV2Config" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2Config.Initializer"></a>

```typescript
import { apigatewayDomainNameV2 } from '@cdktn/provider-awscc'

const apigatewayDomainNameV2Config: apigatewayDomainNameV2.ApigatewayDomainNameV2Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2Config.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2Config.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2Config.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2Config.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2Config.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2Config.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2Config.property.certificateArn">certificateArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_domain_name_v2#certificate_arn ApigatewayDomainNameV2#certificate_arn}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2Config.property.domainName">domainName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_domain_name_v2#domain_name ApigatewayDomainNameV2#domain_name}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2Config.property.endpointAccessMode">endpointAccessMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_domain_name_v2#endpoint_access_mode ApigatewayDomainNameV2#endpoint_access_mode}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2Config.property.endpointConfiguration">endpointConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfiguration">ApigatewayDomainNameV2EndpointConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_domain_name_v2#endpoint_configuration ApigatewayDomainNameV2#endpoint_configuration}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2Config.property.policy">policy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_domain_name_v2#policy ApigatewayDomainNameV2#policy}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2Config.property.routingMode">routingMode</a></code> | <code>string</code> | The valid routing modes are [BASE_PATH_MAPPING_ONLY], [ROUTING_RULE_THEN_BASE_PATH_MAPPING] and [ROUTING_RULE_ONLY]. All other inputs are invalid. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2Config.property.securityPolicy">securityPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_domain_name_v2#security_policy ApigatewayDomainNameV2#security_policy}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2Config.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2Tags">ApigatewayDomainNameV2Tags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_domain_name_v2#tags ApigatewayDomainNameV2#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2Config.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `certificateArn`<sup>Optional</sup> <a name="certificateArn" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2Config.property.certificateArn"></a>

```typescript
public readonly certificateArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_domain_name_v2#certificate_arn ApigatewayDomainNameV2#certificate_arn}.

---

##### `domainName`<sup>Optional</sup> <a name="domainName" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2Config.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_domain_name_v2#domain_name ApigatewayDomainNameV2#domain_name}.

---

##### `endpointAccessMode`<sup>Optional</sup> <a name="endpointAccessMode" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2Config.property.endpointAccessMode"></a>

```typescript
public readonly endpointAccessMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_domain_name_v2#endpoint_access_mode ApigatewayDomainNameV2#endpoint_access_mode}.

---

##### `endpointConfiguration`<sup>Optional</sup> <a name="endpointConfiguration" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2Config.property.endpointConfiguration"></a>

```typescript
public readonly endpointConfiguration: ApigatewayDomainNameV2EndpointConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfiguration">ApigatewayDomainNameV2EndpointConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_domain_name_v2#endpoint_configuration ApigatewayDomainNameV2#endpoint_configuration}.

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2Config.property.policy"></a>

```typescript
public readonly policy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_domain_name_v2#policy ApigatewayDomainNameV2#policy}.

---

##### `routingMode`<sup>Optional</sup> <a name="routingMode" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2Config.property.routingMode"></a>

```typescript
public readonly routingMode: string;
```

- *Type:* string

The valid routing modes are [BASE_PATH_MAPPING_ONLY], [ROUTING_RULE_THEN_BASE_PATH_MAPPING] and [ROUTING_RULE_ONLY]. All other inputs are invalid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_domain_name_v2#routing_mode ApigatewayDomainNameV2#routing_mode}

---

##### `securityPolicy`<sup>Optional</sup> <a name="securityPolicy" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2Config.property.securityPolicy"></a>

```typescript
public readonly securityPolicy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_domain_name_v2#security_policy ApigatewayDomainNameV2#security_policy}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2Config.property.tags"></a>

```typescript
public readonly tags: IResolvable | ApigatewayDomainNameV2Tags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2Tags">ApigatewayDomainNameV2Tags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_domain_name_v2#tags ApigatewayDomainNameV2#tags}.

---

### ApigatewayDomainNameV2EndpointConfiguration <a name="ApigatewayDomainNameV2EndpointConfiguration" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfiguration.Initializer"></a>

```typescript
import { apigatewayDomainNameV2 } from '@cdktn/provider-awscc'

const apigatewayDomainNameV2EndpointConfiguration: apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfiguration.property.ipAddressType">ipAddressType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_domain_name_v2#ip_address_type ApigatewayDomainNameV2#ip_address_type}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfiguration.property.types">types</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_domain_name_v2#types ApigatewayDomainNameV2#types}. |

---

##### `ipAddressType`<sup>Optional</sup> <a name="ipAddressType" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfiguration.property.ipAddressType"></a>

```typescript
public readonly ipAddressType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_domain_name_v2#ip_address_type ApigatewayDomainNameV2#ip_address_type}.

---

##### `types`<sup>Optional</sup> <a name="types" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfiguration.property.types"></a>

```typescript
public readonly types: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_domain_name_v2#types ApigatewayDomainNameV2#types}.

---

### ApigatewayDomainNameV2Tags <a name="ApigatewayDomainNameV2Tags" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2Tags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2Tags.Initializer"></a>

```typescript
import { apigatewayDomainNameV2 } from '@cdktn/provider-awscc'

const apigatewayDomainNameV2Tags: apigatewayDomainNameV2.ApigatewayDomainNameV2Tags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2Tags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_domain_name_v2#key ApigatewayDomainNameV2#key}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2Tags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_domain_name_v2#value ApigatewayDomainNameV2#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2Tags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_domain_name_v2#key ApigatewayDomainNameV2#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2Tags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_domain_name_v2#value ApigatewayDomainNameV2#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApigatewayDomainNameV2EndpointConfigurationOutputReference <a name="ApigatewayDomainNameV2EndpointConfigurationOutputReference" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference.Initializer"></a>

```typescript
import { apigatewayDomainNameV2 } from '@cdktn/provider-awscc'

new apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference.resetIpAddressType">resetIpAddressType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference.resetTypes">resetTypes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIpAddressType` <a name="resetIpAddressType" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference.resetIpAddressType"></a>

```typescript
public resetIpAddressType(): void
```

##### `resetTypes` <a name="resetTypes" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference.resetTypes"></a>

```typescript
public resetTypes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference.property.ipAddressTypeInput">ipAddressTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference.property.typesInput">typesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference.property.ipAddressType">ipAddressType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference.property.types">types</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfiguration">ApigatewayDomainNameV2EndpointConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipAddressTypeInput`<sup>Optional</sup> <a name="ipAddressTypeInput" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference.property.ipAddressTypeInput"></a>

```typescript
public readonly ipAddressTypeInput: string;
```

- *Type:* string

---

##### `typesInput`<sup>Optional</sup> <a name="typesInput" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference.property.typesInput"></a>

```typescript
public readonly typesInput: string[];
```

- *Type:* string[]

---

##### `ipAddressType`<sup>Required</sup> <a name="ipAddressType" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference.property.ipAddressType"></a>

```typescript
public readonly ipAddressType: string;
```

- *Type:* string

---

##### `types`<sup>Required</sup> <a name="types" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference.property.types"></a>

```typescript
public readonly types: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApigatewayDomainNameV2EndpointConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2EndpointConfiguration">ApigatewayDomainNameV2EndpointConfiguration</a>

---


### ApigatewayDomainNameV2TagsList <a name="ApigatewayDomainNameV2TagsList" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsList.Initializer"></a>

```typescript
import { apigatewayDomainNameV2 } from '@cdktn/provider-awscc'

new apigatewayDomainNameV2.ApigatewayDomainNameV2TagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsList.get"></a>

```typescript
public get(index: number): ApigatewayDomainNameV2TagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2Tags">ApigatewayDomainNameV2Tags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApigatewayDomainNameV2Tags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2Tags">ApigatewayDomainNameV2Tags</a>[]

---


### ApigatewayDomainNameV2TagsOutputReference <a name="ApigatewayDomainNameV2TagsOutputReference" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.Initializer"></a>

```typescript
import { apigatewayDomainNameV2 } from '@cdktn/provider-awscc'

new apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2Tags">ApigatewayDomainNameV2Tags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2TagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApigatewayDomainNameV2Tags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayDomainNameV2.ApigatewayDomainNameV2Tags">ApigatewayDomainNameV2Tags</a>

---



