# `route53GlobalresolverFirewallDomainList` Submodule <a name="`route53GlobalresolverFirewallDomainList` Submodule" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53GlobalresolverFirewallDomainList <a name="Route53GlobalresolverFirewallDomainList" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53globalresolver_firewall_domain_list awscc_route53globalresolver_firewall_domain_list}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.Initializer"></a>

```typescript
import { route53GlobalresolverFirewallDomainList } from '@cdktn/provider-awscc'

new route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList(scope: Construct, id: string, config: Route53GlobalresolverFirewallDomainListConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListConfig">Route53GlobalresolverFirewallDomainListConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListConfig">Route53GlobalresolverFirewallDomainListConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.resetClientToken">resetClientToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.resetDomainFileUrl">resetDomainFileUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.resetDomains">resetDomains</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.putTags"></a>

```typescript
public putTags(value: IResolvable | Route53GlobalresolverFirewallDomainListTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTags">Route53GlobalresolverFirewallDomainListTags</a>[]

---

##### `resetClientToken` <a name="resetClientToken" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.resetClientToken"></a>

```typescript
public resetClientToken(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDomainFileUrl` <a name="resetDomainFileUrl" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.resetDomainFileUrl"></a>

```typescript
public resetDomainFileUrl(): void
```

##### `resetDomains` <a name="resetDomains" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.resetDomains"></a>

```typescript
public resetDomains(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Route53GlobalresolverFirewallDomainList resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.isConstruct"></a>

```typescript
import { route53GlobalresolverFirewallDomainList } from '@cdktn/provider-awscc'

route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.isTerraformElement"></a>

```typescript
import { route53GlobalresolverFirewallDomainList } from '@cdktn/provider-awscc'

route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.isTerraformResource"></a>

```typescript
import { route53GlobalresolverFirewallDomainList } from '@cdktn/provider-awscc'

route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.generateConfigForImport"></a>

```typescript
import { route53GlobalresolverFirewallDomainList } from '@cdktn/provider-awscc'

route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a Route53GlobalresolverFirewallDomainList resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Route53GlobalresolverFirewallDomainList to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Route53GlobalresolverFirewallDomainList that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53globalresolver_firewall_domain_list#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Route53GlobalresolverFirewallDomainList to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.domainCount">domainCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.firewallDomainListId">firewallDomainListId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.statusMessage">statusMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsList">Route53GlobalresolverFirewallDomainListTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.clientTokenInput">clientTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.domainFileUrlInput">domainFileUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.domainsInput">domainsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.globalResolverIdInput">globalResolverIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTags">Route53GlobalresolverFirewallDomainListTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.clientToken">clientToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.domainFileUrl">domainFileUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.domains">domains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.globalResolverId">globalResolverId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `domainCount`<sup>Required</sup> <a name="domainCount" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.domainCount"></a>

```typescript
public readonly domainCount: number;
```

- *Type:* number

---

##### `firewallDomainListId`<sup>Required</sup> <a name="firewallDomainListId" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.firewallDomainListId"></a>

```typescript
public readonly firewallDomainListId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `statusMessage`<sup>Required</sup> <a name="statusMessage" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.statusMessage"></a>

```typescript
public readonly statusMessage: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.tags"></a>

```typescript
public readonly tags: Route53GlobalresolverFirewallDomainListTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsList">Route53GlobalresolverFirewallDomainListTagsList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `clientTokenInput`<sup>Optional</sup> <a name="clientTokenInput" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.clientTokenInput"></a>

```typescript
public readonly clientTokenInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `domainFileUrlInput`<sup>Optional</sup> <a name="domainFileUrlInput" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.domainFileUrlInput"></a>

```typescript
public readonly domainFileUrlInput: string;
```

- *Type:* string

---

##### `domainsInput`<sup>Optional</sup> <a name="domainsInput" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.domainsInput"></a>

```typescript
public readonly domainsInput: string[];
```

- *Type:* string[]

---

##### `globalResolverIdInput`<sup>Optional</sup> <a name="globalResolverIdInput" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.globalResolverIdInput"></a>

```typescript
public readonly globalResolverIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | Route53GlobalresolverFirewallDomainListTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTags">Route53GlobalresolverFirewallDomainListTags</a>[]

---

##### `clientToken`<sup>Required</sup> <a name="clientToken" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.clientToken"></a>

```typescript
public readonly clientToken: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `domainFileUrl`<sup>Required</sup> <a name="domainFileUrl" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.domainFileUrl"></a>

```typescript
public readonly domainFileUrl: string;
```

- *Type:* string

---

##### `domains`<sup>Required</sup> <a name="domains" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.domains"></a>

```typescript
public readonly domains: string[];
```

- *Type:* string[]

---

##### `globalResolverId`<sup>Required</sup> <a name="globalResolverId" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.globalResolverId"></a>

```typescript
public readonly globalResolverId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainList.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Route53GlobalresolverFirewallDomainListConfig <a name="Route53GlobalresolverFirewallDomainListConfig" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListConfig.Initializer"></a>

```typescript
import { route53GlobalresolverFirewallDomainList } from '@cdktn/provider-awscc'

const route53GlobalresolverFirewallDomainListConfig: route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListConfig.property.globalResolverId">globalResolverId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53globalresolver_firewall_domain_list#global_resolver_id Route53GlobalresolverFirewallDomainList#global_resolver_id}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53globalresolver_firewall_domain_list#name Route53GlobalresolverFirewallDomainList#name}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListConfig.property.clientToken">clientToken</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53globalresolver_firewall_domain_list#client_token Route53GlobalresolverFirewallDomainList#client_token}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53globalresolver_firewall_domain_list#description Route53GlobalresolverFirewallDomainList#description}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListConfig.property.domainFileUrl">domainFileUrl</a></code> | <code>string</code> | S3 URL to import domains from. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListConfig.property.domains">domains</a></code> | <code>string[]</code> | An inline list of domains to use for this domain list. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTags">Route53GlobalresolverFirewallDomainListTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53globalresolver_firewall_domain_list#tags Route53GlobalresolverFirewallDomainList#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `globalResolverId`<sup>Required</sup> <a name="globalResolverId" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListConfig.property.globalResolverId"></a>

```typescript
public readonly globalResolverId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53globalresolver_firewall_domain_list#global_resolver_id Route53GlobalresolverFirewallDomainList#global_resolver_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53globalresolver_firewall_domain_list#name Route53GlobalresolverFirewallDomainList#name}.

---

##### `clientToken`<sup>Optional</sup> <a name="clientToken" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListConfig.property.clientToken"></a>

```typescript
public readonly clientToken: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53globalresolver_firewall_domain_list#client_token Route53GlobalresolverFirewallDomainList#client_token}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53globalresolver_firewall_domain_list#description Route53GlobalresolverFirewallDomainList#description}.

---

##### `domainFileUrl`<sup>Optional</sup> <a name="domainFileUrl" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListConfig.property.domainFileUrl"></a>

```typescript
public readonly domainFileUrl: string;
```

- *Type:* string

S3 URL to import domains from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53globalresolver_firewall_domain_list#domain_file_url Route53GlobalresolverFirewallDomainList#domain_file_url}

---

##### `domains`<sup>Optional</sup> <a name="domains" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListConfig.property.domains"></a>

```typescript
public readonly domains: string[];
```

- *Type:* string[]

An inline list of domains to use for this domain list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53globalresolver_firewall_domain_list#domains Route53GlobalresolverFirewallDomainList#domains}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | Route53GlobalresolverFirewallDomainListTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTags">Route53GlobalresolverFirewallDomainListTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53globalresolver_firewall_domain_list#tags Route53GlobalresolverFirewallDomainList#tags}.

---

### Route53GlobalresolverFirewallDomainListTags <a name="Route53GlobalresolverFirewallDomainListTags" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTags.Initializer"></a>

```typescript
import { route53GlobalresolverFirewallDomainList } from '@cdktn/provider-awscc'

const route53GlobalresolverFirewallDomainListTags: route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53globalresolver_firewall_domain_list#key Route53GlobalresolverFirewallDomainList#key}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53globalresolver_firewall_domain_list#value Route53GlobalresolverFirewallDomainList#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53globalresolver_firewall_domain_list#key Route53GlobalresolverFirewallDomainList#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53globalresolver_firewall_domain_list#value Route53GlobalresolverFirewallDomainList#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### Route53GlobalresolverFirewallDomainListTagsList <a name="Route53GlobalresolverFirewallDomainListTagsList" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsList.Initializer"></a>

```typescript
import { route53GlobalresolverFirewallDomainList } from '@cdktn/provider-awscc'

new route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsList.get"></a>

```typescript
public get(index: number): Route53GlobalresolverFirewallDomainListTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTags">Route53GlobalresolverFirewallDomainListTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Route53GlobalresolverFirewallDomainListTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTags">Route53GlobalresolverFirewallDomainListTags</a>[]

---


### Route53GlobalresolverFirewallDomainListTagsOutputReference <a name="Route53GlobalresolverFirewallDomainListTagsOutputReference" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.Initializer"></a>

```typescript
import { route53GlobalresolverFirewallDomainList } from '@cdktn/provider-awscc'

new route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTags">Route53GlobalresolverFirewallDomainListTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Route53GlobalresolverFirewallDomainListTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallDomainList.Route53GlobalresolverFirewallDomainListTags">Route53GlobalresolverFirewallDomainListTags</a>

---



