# `route53GlobalresolverDnsView` Submodule <a name="`route53GlobalresolverDnsView` Submodule" id="@cdktn/provider-awscc.route53GlobalresolverDnsView"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53GlobalresolverDnsView <a name="Route53GlobalresolverDnsView" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53globalresolver_dns_view awscc_route53globalresolver_dns_view}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.Initializer"></a>

```typescript
import { route53GlobalresolverDnsView } from '@cdktn/provider-awscc'

new route53GlobalresolverDnsView.Route53GlobalresolverDnsView(scope: Construct, id: string, config: Route53GlobalresolverDnsViewConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewConfig">Route53GlobalresolverDnsViewConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewConfig">Route53GlobalresolverDnsViewConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.resetClientToken">resetClientToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.resetDnssecValidation">resetDnssecValidation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.resetEdnsClientSubnet">resetEdnsClientSubnet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.resetFirewallRulesFailOpen">resetFirewallRulesFailOpen</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.putTags"></a>

```typescript
public putTags(value: IResolvable | Route53GlobalresolverDnsViewTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTags">Route53GlobalresolverDnsViewTags</a>[]

---

##### `resetClientToken` <a name="resetClientToken" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.resetClientToken"></a>

```typescript
public resetClientToken(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDnssecValidation` <a name="resetDnssecValidation" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.resetDnssecValidation"></a>

```typescript
public resetDnssecValidation(): void
```

##### `resetEdnsClientSubnet` <a name="resetEdnsClientSubnet" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.resetEdnsClientSubnet"></a>

```typescript
public resetEdnsClientSubnet(): void
```

##### `resetFirewallRulesFailOpen` <a name="resetFirewallRulesFailOpen" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.resetFirewallRulesFailOpen"></a>

```typescript
public resetFirewallRulesFailOpen(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Route53GlobalresolverDnsView resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.isConstruct"></a>

```typescript
import { route53GlobalresolverDnsView } from '@cdktn/provider-awscc'

route53GlobalresolverDnsView.Route53GlobalresolverDnsView.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.isTerraformElement"></a>

```typescript
import { route53GlobalresolverDnsView } from '@cdktn/provider-awscc'

route53GlobalresolverDnsView.Route53GlobalresolverDnsView.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.isTerraformResource"></a>

```typescript
import { route53GlobalresolverDnsView } from '@cdktn/provider-awscc'

route53GlobalresolverDnsView.Route53GlobalresolverDnsView.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.generateConfigForImport"></a>

```typescript
import { route53GlobalresolverDnsView } from '@cdktn/provider-awscc'

route53GlobalresolverDnsView.Route53GlobalresolverDnsView.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a Route53GlobalresolverDnsView resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Route53GlobalresolverDnsView to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Route53GlobalresolverDnsView that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53globalresolver_dns_view#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Route53GlobalresolverDnsView to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.dnsViewId">dnsViewId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsList">Route53GlobalresolverDnsViewTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.clientTokenInput">clientTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.dnssecValidationInput">dnssecValidationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.ednsClientSubnetInput">ednsClientSubnetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.firewallRulesFailOpenInput">firewallRulesFailOpenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.globalResolverIdInput">globalResolverIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTags">Route53GlobalresolverDnsViewTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.clientToken">clientToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.dnssecValidation">dnssecValidation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.ednsClientSubnet">ednsClientSubnet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.firewallRulesFailOpen">firewallRulesFailOpen</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.globalResolverId">globalResolverId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `dnsViewId`<sup>Required</sup> <a name="dnsViewId" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.dnsViewId"></a>

```typescript
public readonly dnsViewId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.tags"></a>

```typescript
public readonly tags: Route53GlobalresolverDnsViewTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsList">Route53GlobalresolverDnsViewTagsList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `clientTokenInput`<sup>Optional</sup> <a name="clientTokenInput" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.clientTokenInput"></a>

```typescript
public readonly clientTokenInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `dnssecValidationInput`<sup>Optional</sup> <a name="dnssecValidationInput" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.dnssecValidationInput"></a>

```typescript
public readonly dnssecValidationInput: string;
```

- *Type:* string

---

##### `ednsClientSubnetInput`<sup>Optional</sup> <a name="ednsClientSubnetInput" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.ednsClientSubnetInput"></a>

```typescript
public readonly ednsClientSubnetInput: string;
```

- *Type:* string

---

##### `firewallRulesFailOpenInput`<sup>Optional</sup> <a name="firewallRulesFailOpenInput" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.firewallRulesFailOpenInput"></a>

```typescript
public readonly firewallRulesFailOpenInput: string;
```

- *Type:* string

---

##### `globalResolverIdInput`<sup>Optional</sup> <a name="globalResolverIdInput" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.globalResolverIdInput"></a>

```typescript
public readonly globalResolverIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | Route53GlobalresolverDnsViewTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTags">Route53GlobalresolverDnsViewTags</a>[]

---

##### `clientToken`<sup>Required</sup> <a name="clientToken" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.clientToken"></a>

```typescript
public readonly clientToken: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `dnssecValidation`<sup>Required</sup> <a name="dnssecValidation" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.dnssecValidation"></a>

```typescript
public readonly dnssecValidation: string;
```

- *Type:* string

---

##### `ednsClientSubnet`<sup>Required</sup> <a name="ednsClientSubnet" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.ednsClientSubnet"></a>

```typescript
public readonly ednsClientSubnet: string;
```

- *Type:* string

---

##### `firewallRulesFailOpen`<sup>Required</sup> <a name="firewallRulesFailOpen" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.firewallRulesFailOpen"></a>

```typescript
public readonly firewallRulesFailOpen: string;
```

- *Type:* string

---

##### `globalResolverId`<sup>Required</sup> <a name="globalResolverId" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.globalResolverId"></a>

```typescript
public readonly globalResolverId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsView.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Route53GlobalresolverDnsViewConfig <a name="Route53GlobalresolverDnsViewConfig" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewConfig.Initializer"></a>

```typescript
import { route53GlobalresolverDnsView } from '@cdktn/provider-awscc'

const route53GlobalresolverDnsViewConfig: route53GlobalresolverDnsView.Route53GlobalresolverDnsViewConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewConfig.property.globalResolverId">globalResolverId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53globalresolver_dns_view#global_resolver_id Route53GlobalresolverDnsView#global_resolver_id}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53globalresolver_dns_view#name Route53GlobalresolverDnsView#name}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewConfig.property.clientToken">clientToken</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53globalresolver_dns_view#client_token Route53GlobalresolverDnsView#client_token}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53globalresolver_dns_view#description Route53GlobalresolverDnsView#description}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewConfig.property.dnssecValidation">dnssecValidation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53globalresolver_dns_view#dnssec_validation Route53GlobalresolverDnsView#dnssec_validation}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewConfig.property.ednsClientSubnet">ednsClientSubnet</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53globalresolver_dns_view#edns_client_subnet Route53GlobalresolverDnsView#edns_client_subnet}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewConfig.property.firewallRulesFailOpen">firewallRulesFailOpen</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53globalresolver_dns_view#firewall_rules_fail_open Route53GlobalresolverDnsView#firewall_rules_fail_open}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTags">Route53GlobalresolverDnsViewTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53globalresolver_dns_view#tags Route53GlobalresolverDnsView#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `globalResolverId`<sup>Required</sup> <a name="globalResolverId" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewConfig.property.globalResolverId"></a>

```typescript
public readonly globalResolverId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53globalresolver_dns_view#global_resolver_id Route53GlobalresolverDnsView#global_resolver_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53globalresolver_dns_view#name Route53GlobalresolverDnsView#name}.

---

##### `clientToken`<sup>Optional</sup> <a name="clientToken" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewConfig.property.clientToken"></a>

```typescript
public readonly clientToken: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53globalresolver_dns_view#client_token Route53GlobalresolverDnsView#client_token}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53globalresolver_dns_view#description Route53GlobalresolverDnsView#description}.

---

##### `dnssecValidation`<sup>Optional</sup> <a name="dnssecValidation" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewConfig.property.dnssecValidation"></a>

```typescript
public readonly dnssecValidation: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53globalresolver_dns_view#dnssec_validation Route53GlobalresolverDnsView#dnssec_validation}.

---

##### `ednsClientSubnet`<sup>Optional</sup> <a name="ednsClientSubnet" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewConfig.property.ednsClientSubnet"></a>

```typescript
public readonly ednsClientSubnet: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53globalresolver_dns_view#edns_client_subnet Route53GlobalresolverDnsView#edns_client_subnet}.

---

##### `firewallRulesFailOpen`<sup>Optional</sup> <a name="firewallRulesFailOpen" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewConfig.property.firewallRulesFailOpen"></a>

```typescript
public readonly firewallRulesFailOpen: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53globalresolver_dns_view#firewall_rules_fail_open Route53GlobalresolverDnsView#firewall_rules_fail_open}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | Route53GlobalresolverDnsViewTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTags">Route53GlobalresolverDnsViewTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53globalresolver_dns_view#tags Route53GlobalresolverDnsView#tags}.

---

### Route53GlobalresolverDnsViewTags <a name="Route53GlobalresolverDnsViewTags" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTags.Initializer"></a>

```typescript
import { route53GlobalresolverDnsView } from '@cdktn/provider-awscc'

const route53GlobalresolverDnsViewTags: route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53globalresolver_dns_view#key Route53GlobalresolverDnsView#key}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53globalresolver_dns_view#value Route53GlobalresolverDnsView#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53globalresolver_dns_view#key Route53GlobalresolverDnsView#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53globalresolver_dns_view#value Route53GlobalresolverDnsView#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### Route53GlobalresolverDnsViewTagsList <a name="Route53GlobalresolverDnsViewTagsList" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsList.Initializer"></a>

```typescript
import { route53GlobalresolverDnsView } from '@cdktn/provider-awscc'

new route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsList.get"></a>

```typescript
public get(index: number): Route53GlobalresolverDnsViewTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTags">Route53GlobalresolverDnsViewTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Route53GlobalresolverDnsViewTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTags">Route53GlobalresolverDnsViewTags</a>[]

---


### Route53GlobalresolverDnsViewTagsOutputReference <a name="Route53GlobalresolverDnsViewTagsOutputReference" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.Initializer"></a>

```typescript
import { route53GlobalresolverDnsView } from '@cdktn/provider-awscc'

new route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTags">Route53GlobalresolverDnsViewTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Route53GlobalresolverDnsViewTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53GlobalresolverDnsView.Route53GlobalresolverDnsViewTags">Route53GlobalresolverDnsViewTags</a>

---



