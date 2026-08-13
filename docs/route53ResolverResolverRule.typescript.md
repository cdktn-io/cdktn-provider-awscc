# `route53ResolverResolverRule` Submodule <a name="`route53ResolverResolverRule` Submodule" id="@cdktn/provider-awscc.route53ResolverResolverRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53ResolverResolverRule <a name="Route53ResolverResolverRule" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_resolver_rule awscc_route53resolver_resolver_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.Initializer"></a>

```typescript
import { route53ResolverResolverRule } from '@cdktn/provider-awscc'

new route53ResolverResolverRule.Route53ResolverResolverRule(scope: Construct, id: string, config: Route53ResolverResolverRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleConfig">Route53ResolverResolverRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleConfig">Route53ResolverResolverRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.putTargetIps">putTargetIps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.resetDelegationRecord">resetDelegationRecord</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.resetDomainName">resetDomainName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.resetResolverEndpointId">resetResolverEndpointId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.resetTargetIps">resetTargetIps</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.putTags"></a>

```typescript
public putTags(value: IResolvable | Route53ResolverResolverRuleTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTags">Route53ResolverResolverRuleTags</a>[]

---

##### `putTargetIps` <a name="putTargetIps" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.putTargetIps"></a>

```typescript
public putTargetIps(value: IResolvable | Route53ResolverResolverRuleTargetIps[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.putTargetIps.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIps">Route53ResolverResolverRuleTargetIps</a>[]

---

##### `resetDelegationRecord` <a name="resetDelegationRecord" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.resetDelegationRecord"></a>

```typescript
public resetDelegationRecord(): void
```

##### `resetDomainName` <a name="resetDomainName" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.resetDomainName"></a>

```typescript
public resetDomainName(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.resetName"></a>

```typescript
public resetName(): void
```

##### `resetResolverEndpointId` <a name="resetResolverEndpointId" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.resetResolverEndpointId"></a>

```typescript
public resetResolverEndpointId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTargetIps` <a name="resetTargetIps" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.resetTargetIps"></a>

```typescript
public resetTargetIps(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Route53ResolverResolverRule resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.isConstruct"></a>

```typescript
import { route53ResolverResolverRule } from '@cdktn/provider-awscc'

route53ResolverResolverRule.Route53ResolverResolverRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.isTerraformElement"></a>

```typescript
import { route53ResolverResolverRule } from '@cdktn/provider-awscc'

route53ResolverResolverRule.Route53ResolverResolverRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.isTerraformResource"></a>

```typescript
import { route53ResolverResolverRule } from '@cdktn/provider-awscc'

route53ResolverResolverRule.Route53ResolverResolverRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.generateConfigForImport"></a>

```typescript
import { route53ResolverResolverRule } from '@cdktn/provider-awscc'

route53ResolverResolverRule.Route53ResolverResolverRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a Route53ResolverResolverRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Route53ResolverResolverRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Route53ResolverResolverRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_resolver_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Route53ResolverResolverRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.resolverRuleId">resolverRuleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsList">Route53ResolverResolverRuleTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.targetIps">targetIps</a></code> | <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsList">Route53ResolverResolverRuleTargetIpsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.delegationRecordInput">delegationRecordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.domainNameInput">domainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.resolverEndpointIdInput">resolverEndpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.ruleTypeInput">ruleTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTags">Route53ResolverResolverRuleTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.targetIpsInput">targetIpsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIps">Route53ResolverResolverRuleTargetIps</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.delegationRecord">delegationRecord</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.resolverEndpointId">resolverEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.ruleType">ruleType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `resolverRuleId`<sup>Required</sup> <a name="resolverRuleId" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.resolverRuleId"></a>

```typescript
public readonly resolverRuleId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.tags"></a>

```typescript
public readonly tags: Route53ResolverResolverRuleTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsList">Route53ResolverResolverRuleTagsList</a>

---

##### `targetIps`<sup>Required</sup> <a name="targetIps" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.targetIps"></a>

```typescript
public readonly targetIps: Route53ResolverResolverRuleTargetIpsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsList">Route53ResolverResolverRuleTargetIpsList</a>

---

##### `delegationRecordInput`<sup>Optional</sup> <a name="delegationRecordInput" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.delegationRecordInput"></a>

```typescript
public readonly delegationRecordInput: string;
```

- *Type:* string

---

##### `domainNameInput`<sup>Optional</sup> <a name="domainNameInput" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.domainNameInput"></a>

```typescript
public readonly domainNameInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resolverEndpointIdInput`<sup>Optional</sup> <a name="resolverEndpointIdInput" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.resolverEndpointIdInput"></a>

```typescript
public readonly resolverEndpointIdInput: string;
```

- *Type:* string

---

##### `ruleTypeInput`<sup>Optional</sup> <a name="ruleTypeInput" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.ruleTypeInput"></a>

```typescript
public readonly ruleTypeInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | Route53ResolverResolverRuleTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTags">Route53ResolverResolverRuleTags</a>[]

---

##### `targetIpsInput`<sup>Optional</sup> <a name="targetIpsInput" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.targetIpsInput"></a>

```typescript
public readonly targetIpsInput: IResolvable | Route53ResolverResolverRuleTargetIps[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIps">Route53ResolverResolverRuleTargetIps</a>[]

---

##### `delegationRecord`<sup>Required</sup> <a name="delegationRecord" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.delegationRecord"></a>

```typescript
public readonly delegationRecord: string;
```

- *Type:* string

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resolverEndpointId`<sup>Required</sup> <a name="resolverEndpointId" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.resolverEndpointId"></a>

```typescript
public readonly resolverEndpointId: string;
```

- *Type:* string

---

##### `ruleType`<sup>Required</sup> <a name="ruleType" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.ruleType"></a>

```typescript
public readonly ruleType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Route53ResolverResolverRuleConfig <a name="Route53ResolverResolverRuleConfig" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleConfig.Initializer"></a>

```typescript
import { route53ResolverResolverRule } from '@cdktn/provider-awscc'

const route53ResolverResolverRuleConfig: route53ResolverResolverRule.Route53ResolverResolverRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleConfig.property.ruleType">ruleType</a></code> | <code>string</code> | When you want to forward DNS queries for specified domain name to resolvers on your network, specify FORWARD. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleConfig.property.delegationRecord">delegationRecord</a></code> | <code>string</code> | The name server domain for queries to be delegated to if a query matches the delegation record. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleConfig.property.domainName">domainName</a></code> | <code>string</code> | DNS queries for this domain name are forwarded to the IP addresses that are specified in TargetIps. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleConfig.property.name">name</a></code> | <code>string</code> | The name for the Resolver rule. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleConfig.property.resolverEndpointId">resolverEndpointId</a></code> | <code>string</code> | The ID of the endpoint that the rule is associated with. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTags">Route53ResolverResolverRuleTags</a>[]</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleConfig.property.targetIps">targetIps</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIps">Route53ResolverResolverRuleTargetIps</a>[]</code> | An array that contains the IP addresses and ports that an outbound endpoint forwards DNS queries to. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `ruleType`<sup>Required</sup> <a name="ruleType" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleConfig.property.ruleType"></a>

```typescript
public readonly ruleType: string;
```

- *Type:* string

When you want to forward DNS queries for specified domain name to resolvers on your network, specify FORWARD.

When you have a forwarding rule to forward DNS queries for a domain to your network and you want Resolver to process queries for a subdomain of that domain, specify SYSTEM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_resolver_rule#rule_type Route53ResolverResolverRule#rule_type}

---

##### `delegationRecord`<sup>Optional</sup> <a name="delegationRecord" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleConfig.property.delegationRecord"></a>

```typescript
public readonly delegationRecord: string;
```

- *Type:* string

The name server domain for queries to be delegated to if a query matches the delegation record.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_resolver_rule#delegation_record Route53ResolverResolverRule#delegation_record}

---

##### `domainName`<sup>Optional</sup> <a name="domainName" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleConfig.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

DNS queries for this domain name are forwarded to the IP addresses that are specified in TargetIps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_resolver_rule#domain_name Route53ResolverResolverRule#domain_name}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name for the Resolver rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_resolver_rule#name Route53ResolverResolverRule#name}

---

##### `resolverEndpointId`<sup>Optional</sup> <a name="resolverEndpointId" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleConfig.property.resolverEndpointId"></a>

```typescript
public readonly resolverEndpointId: string;
```

- *Type:* string

The ID of the endpoint that the rule is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_resolver_rule#resolver_endpoint_id Route53ResolverResolverRule#resolver_endpoint_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | Route53ResolverResolverRuleTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTags">Route53ResolverResolverRuleTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_resolver_rule#tags Route53ResolverResolverRule#tags}

---

##### `targetIps`<sup>Optional</sup> <a name="targetIps" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleConfig.property.targetIps"></a>

```typescript
public readonly targetIps: IResolvable | Route53ResolverResolverRuleTargetIps[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIps">Route53ResolverResolverRuleTargetIps</a>[]

An array that contains the IP addresses and ports that an outbound endpoint forwards DNS queries to.

Typically, these are the IP addresses of DNS resolvers on your network. Specify IPv4 addresses. IPv6 is not supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_resolver_rule#target_ips Route53ResolverResolverRule#target_ips}

---

### Route53ResolverResolverRuleTags <a name="Route53ResolverResolverRuleTags" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTags.Initializer"></a>

```typescript
import { route53ResolverResolverRule } from '@cdktn/provider-awscc'

const route53ResolverResolverRuleTags: route53ResolverResolverRule.Route53ResolverResolverRuleTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_resolver_rule#key Route53ResolverResolverRule#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_resolver_rule#value Route53ResolverResolverRule#value}

---

### Route53ResolverResolverRuleTargetIps <a name="Route53ResolverResolverRuleTargetIps" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIps"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIps.Initializer"></a>

```typescript
import { route53ResolverResolverRule } from '@cdktn/provider-awscc'

const route53ResolverResolverRuleTargetIps: route53ResolverResolverRule.Route53ResolverResolverRuleTargetIps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIps.property.ip">ip</a></code> | <code>string</code> | One IP address that you want to forward DNS queries to. You can specify only IPv4 addresses. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIps.property.ipv6">ipv6</a></code> | <code>string</code> | One IPv6 address that you want to forward DNS queries to. You can specify only IPv6 addresses. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIps.property.port">port</a></code> | <code>string</code> | The port at Ip that you want to forward DNS queries to. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIps.property.protocol">protocol</a></code> | <code>string</code> | The protocol that you want to use to forward DNS queries. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIps.property.serverNameIndication">serverNameIndication</a></code> | <code>string</code> | The SNI of the target name servers for DoH/DoH-FIPS outbound endpoints. |

---

##### `ip`<sup>Optional</sup> <a name="ip" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIps.property.ip"></a>

```typescript
public readonly ip: string;
```

- *Type:* string

One IP address that you want to forward DNS queries to. You can specify only IPv4 addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_resolver_rule#ip Route53ResolverResolverRule#ip}

---

##### `ipv6`<sup>Optional</sup> <a name="ipv6" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIps.property.ipv6"></a>

```typescript
public readonly ipv6: string;
```

- *Type:* string

One IPv6 address that you want to forward DNS queries to. You can specify only IPv6 addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_resolver_rule#ipv_6 Route53ResolverResolverRule#ipv_6}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIps.property.port"></a>

```typescript
public readonly port: string;
```

- *Type:* string

The port at Ip that you want to forward DNS queries to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_resolver_rule#port Route53ResolverResolverRule#port}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIps.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

The protocol that you want to use to forward DNS queries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_resolver_rule#protocol Route53ResolverResolverRule#protocol}

---

##### `serverNameIndication`<sup>Optional</sup> <a name="serverNameIndication" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIps.property.serverNameIndication"></a>

```typescript
public readonly serverNameIndication: string;
```

- *Type:* string

The SNI of the target name servers for DoH/DoH-FIPS outbound endpoints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_resolver_rule#server_name_indication Route53ResolverResolverRule#server_name_indication}

---

## Classes <a name="Classes" id="Classes"></a>

### Route53ResolverResolverRuleTagsList <a name="Route53ResolverResolverRuleTagsList" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsList.Initializer"></a>

```typescript
import { route53ResolverResolverRule } from '@cdktn/provider-awscc'

new route53ResolverResolverRule.Route53ResolverResolverRuleTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsList.get"></a>

```typescript
public get(index: number): Route53ResolverResolverRuleTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTags">Route53ResolverResolverRuleTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Route53ResolverResolverRuleTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTags">Route53ResolverResolverRuleTags</a>[]

---


### Route53ResolverResolverRuleTagsOutputReference <a name="Route53ResolverResolverRuleTagsOutputReference" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.Initializer"></a>

```typescript
import { route53ResolverResolverRule } from '@cdktn/provider-awscc'

new route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTags">Route53ResolverResolverRuleTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Route53ResolverResolverRuleTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTags">Route53ResolverResolverRuleTags</a>

---


### Route53ResolverResolverRuleTargetIpsList <a name="Route53ResolverResolverRuleTargetIpsList" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsList.Initializer"></a>

```typescript
import { route53ResolverResolverRule } from '@cdktn/provider-awscc'

new route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsList.get"></a>

```typescript
public get(index: number): Route53ResolverResolverRuleTargetIpsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIps">Route53ResolverResolverRuleTargetIps</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Route53ResolverResolverRuleTargetIps[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIps">Route53ResolverResolverRuleTargetIps</a>[]

---


### Route53ResolverResolverRuleTargetIpsOutputReference <a name="Route53ResolverResolverRuleTargetIpsOutputReference" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.Initializer"></a>

```typescript
import { route53ResolverResolverRule } from '@cdktn/provider-awscc'

new route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.resetIp">resetIp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.resetIpv6">resetIpv6</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.resetServerNameIndication">resetServerNameIndication</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIp` <a name="resetIp" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.resetIp"></a>

```typescript
public resetIp(): void
```

##### `resetIpv6` <a name="resetIpv6" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.resetIpv6"></a>

```typescript
public resetIpv6(): void
```

##### `resetPort` <a name="resetPort" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.resetProtocol"></a>

```typescript
public resetProtocol(): void
```

##### `resetServerNameIndication` <a name="resetServerNameIndication" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.resetServerNameIndication"></a>

```typescript
public resetServerNameIndication(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.property.ipInput">ipInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.property.ipv6Input">ipv6Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.property.portInput">portInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.property.serverNameIndicationInput">serverNameIndicationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.property.ip">ip</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.property.ipv6">ipv6</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.property.port">port</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.property.serverNameIndication">serverNameIndication</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIps">Route53ResolverResolverRuleTargetIps</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipInput`<sup>Optional</sup> <a name="ipInput" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.property.ipInput"></a>

```typescript
public readonly ipInput: string;
```

- *Type:* string

---

##### `ipv6Input`<sup>Optional</sup> <a name="ipv6Input" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.property.ipv6Input"></a>

```typescript
public readonly ipv6Input: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.property.portInput"></a>

```typescript
public readonly portInput: string;
```

- *Type:* string

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `serverNameIndicationInput`<sup>Optional</sup> <a name="serverNameIndicationInput" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.property.serverNameIndicationInput"></a>

```typescript
public readonly serverNameIndicationInput: string;
```

- *Type:* string

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.property.ip"></a>

```typescript
public readonly ip: string;
```

- *Type:* string

---

##### `ipv6`<sup>Required</sup> <a name="ipv6" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.property.ipv6"></a>

```typescript
public readonly ipv6: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.property.port"></a>

```typescript
public readonly port: string;
```

- *Type:* string

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `serverNameIndication`<sup>Required</sup> <a name="serverNameIndication" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.property.serverNameIndication"></a>

```typescript
public readonly serverNameIndication: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Route53ResolverResolverRuleTargetIps;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIps">Route53ResolverResolverRuleTargetIps</a>

---



