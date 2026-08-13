# `route53ResolverFirewallRuleGroup` Submodule <a name="`route53ResolverFirewallRuleGroup` Submodule" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53ResolverFirewallRuleGroup <a name="Route53ResolverFirewallRuleGroup" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_firewall_rule_group awscc_route53resolver_firewall_rule_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.Initializer"></a>

```typescript
import { route53ResolverFirewallRuleGroup } from '@cdktn/provider-awscc'

new route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup(scope: Construct, id: string, config?: Route53ResolverFirewallRuleGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupConfig">Route53ResolverFirewallRuleGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupConfig">Route53ResolverFirewallRuleGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.putFirewallRules">putFirewallRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.resetFirewallRules">resetFirewallRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFirewallRules` <a name="putFirewallRules" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.putFirewallRules"></a>

```typescript
public putFirewallRules(value: IResolvable | Route53ResolverFirewallRuleGroupFirewallRules[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.putFirewallRules.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules">Route53ResolverFirewallRuleGroupFirewallRules</a>[]

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.putTags"></a>

```typescript
public putTags(value: IResolvable | Route53ResolverFirewallRuleGroupTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTags">Route53ResolverFirewallRuleGroupTags</a>[]

---

##### `resetFirewallRules` <a name="resetFirewallRules" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.resetFirewallRules"></a>

```typescript
public resetFirewallRules(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.resetName"></a>

```typescript
public resetName(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Route53ResolverFirewallRuleGroup resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.isConstruct"></a>

```typescript
import { route53ResolverFirewallRuleGroup } from '@cdktn/provider-awscc'

route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.isTerraformElement"></a>

```typescript
import { route53ResolverFirewallRuleGroup } from '@cdktn/provider-awscc'

route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.isTerraformResource"></a>

```typescript
import { route53ResolverFirewallRuleGroup } from '@cdktn/provider-awscc'

route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.generateConfigForImport"></a>

```typescript
import { route53ResolverFirewallRuleGroup } from '@cdktn/provider-awscc'

route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a Route53ResolverFirewallRuleGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Route53ResolverFirewallRuleGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Route53ResolverFirewallRuleGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_firewall_rule_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Route53ResolverFirewallRuleGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.creationTime">creationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.creatorRequestId">creatorRequestId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.firewallRuleGroupId">firewallRuleGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.firewallRules">firewallRules</a></code> | <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList">Route53ResolverFirewallRuleGroupFirewallRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.modificationTime">modificationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.ownerId">ownerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.ruleCount">ruleCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.shareStatus">shareStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.statusMessage">statusMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList">Route53ResolverFirewallRuleGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.firewallRulesInput">firewallRulesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules">Route53ResolverFirewallRuleGroupFirewallRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTags">Route53ResolverFirewallRuleGroupTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

---

##### `creatorRequestId`<sup>Required</sup> <a name="creatorRequestId" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.creatorRequestId"></a>

```typescript
public readonly creatorRequestId: string;
```

- *Type:* string

---

##### `firewallRuleGroupId`<sup>Required</sup> <a name="firewallRuleGroupId" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.firewallRuleGroupId"></a>

```typescript
public readonly firewallRuleGroupId: string;
```

- *Type:* string

---

##### `firewallRules`<sup>Required</sup> <a name="firewallRules" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.firewallRules"></a>

```typescript
public readonly firewallRules: Route53ResolverFirewallRuleGroupFirewallRulesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList">Route53ResolverFirewallRuleGroupFirewallRulesList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `modificationTime`<sup>Required</sup> <a name="modificationTime" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.modificationTime"></a>

```typescript
public readonly modificationTime: string;
```

- *Type:* string

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.ownerId"></a>

```typescript
public readonly ownerId: string;
```

- *Type:* string

---

##### `ruleCount`<sup>Required</sup> <a name="ruleCount" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.ruleCount"></a>

```typescript
public readonly ruleCount: number;
```

- *Type:* number

---

##### `shareStatus`<sup>Required</sup> <a name="shareStatus" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.shareStatus"></a>

```typescript
public readonly shareStatus: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `statusMessage`<sup>Required</sup> <a name="statusMessage" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.statusMessage"></a>

```typescript
public readonly statusMessage: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.tags"></a>

```typescript
public readonly tags: Route53ResolverFirewallRuleGroupTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList">Route53ResolverFirewallRuleGroupTagsList</a>

---

##### `firewallRulesInput`<sup>Optional</sup> <a name="firewallRulesInput" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.firewallRulesInput"></a>

```typescript
public readonly firewallRulesInput: IResolvable | Route53ResolverFirewallRuleGroupFirewallRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules">Route53ResolverFirewallRuleGroupFirewallRules</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | Route53ResolverFirewallRuleGroupTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTags">Route53ResolverFirewallRuleGroupTags</a>[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Route53ResolverFirewallRuleGroupConfig <a name="Route53ResolverFirewallRuleGroupConfig" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupConfig.Initializer"></a>

```typescript
import { route53ResolverFirewallRuleGroup } from '@cdktn/provider-awscc'

const route53ResolverFirewallRuleGroupConfig: route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupConfig.property.firewallRules">firewallRules</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules">Route53ResolverFirewallRuleGroupFirewallRules</a>[]</code> | FirewallRules. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupConfig.property.name">name</a></code> | <code>string</code> | FirewallRuleGroupName. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTags">Route53ResolverFirewallRuleGroupTags</a>[]</code> | Tags. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `firewallRules`<sup>Optional</sup> <a name="firewallRules" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupConfig.property.firewallRules"></a>

```typescript
public readonly firewallRules: IResolvable | Route53ResolverFirewallRuleGroupFirewallRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules">Route53ResolverFirewallRuleGroupFirewallRules</a>[]

FirewallRules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_firewall_rule_group#firewall_rules Route53ResolverFirewallRuleGroup#firewall_rules}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

FirewallRuleGroupName.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_firewall_rule_group#name Route53ResolverFirewallRuleGroup#name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | Route53ResolverFirewallRuleGroupTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTags">Route53ResolverFirewallRuleGroupTags</a>[]

Tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_firewall_rule_group#tags Route53ResolverFirewallRuleGroup#tags}

---

### Route53ResolverFirewallRuleGroupFirewallRules <a name="Route53ResolverFirewallRuleGroupFirewallRules" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.Initializer"></a>

```typescript
import { route53ResolverFirewallRuleGroup } from '@cdktn/provider-awscc'

const route53ResolverFirewallRuleGroupFirewallRules: route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.action">action</a></code> | <code>string</code> | Rule Action. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.blockOverrideDnsType">blockOverrideDnsType</a></code> | <code>string</code> | BlockOverrideDnsType. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.blockOverrideDomain">blockOverrideDomain</a></code> | <code>string</code> | BlockOverrideDomain. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.blockOverrideTtl">blockOverrideTtl</a></code> | <code>number</code> | BlockOverrideTtl. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.blockResponse">blockResponse</a></code> | <code>string</code> | BlockResponse. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.confidenceThreshold">confidenceThreshold</a></code> | <code>string</code> | ConfidenceThreshold. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.dnsThreatProtection">dnsThreatProtection</a></code> | <code>string</code> | DnsThreatProtection. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.firewallDomainListId">firewallDomainListId</a></code> | <code>string</code> | ResourceId. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.firewallDomainRedirectionAction">firewallDomainRedirectionAction</a></code> | <code>string</code> | FirewallDomainRedirectionAction. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.firewallRuleType">firewallRuleType</a></code> | <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType</a></code> | Advanced firewall rule type. Mutually exclusive with FirewallDomainListId and DnsThreatProtection/ConfidenceThreshold. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.firewallThreatProtectionId">firewallThreatProtectionId</a></code> | <code>string</code> | ResourceId. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.priority">priority</a></code> | <code>number</code> | Rule Priority. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.qtype">qtype</a></code> | <code>string</code> | Qtype. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.status">status</a></code> | <code>string</code> | The status of the firewall rule. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

Rule Action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_firewall_rule_group#action Route53ResolverFirewallRuleGroup#action}

---

##### `blockOverrideDnsType`<sup>Optional</sup> <a name="blockOverrideDnsType" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.blockOverrideDnsType"></a>

```typescript
public readonly blockOverrideDnsType: string;
```

- *Type:* string

BlockOverrideDnsType.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_firewall_rule_group#block_override_dns_type Route53ResolverFirewallRuleGroup#block_override_dns_type}

---

##### `blockOverrideDomain`<sup>Optional</sup> <a name="blockOverrideDomain" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.blockOverrideDomain"></a>

```typescript
public readonly blockOverrideDomain: string;
```

- *Type:* string

BlockOverrideDomain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_firewall_rule_group#block_override_domain Route53ResolverFirewallRuleGroup#block_override_domain}

---

##### `blockOverrideTtl`<sup>Optional</sup> <a name="blockOverrideTtl" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.blockOverrideTtl"></a>

```typescript
public readonly blockOverrideTtl: number;
```

- *Type:* number

BlockOverrideTtl.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_firewall_rule_group#block_override_ttl Route53ResolverFirewallRuleGroup#block_override_ttl}

---

##### `blockResponse`<sup>Optional</sup> <a name="blockResponse" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.blockResponse"></a>

```typescript
public readonly blockResponse: string;
```

- *Type:* string

BlockResponse.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_firewall_rule_group#block_response Route53ResolverFirewallRuleGroup#block_response}

---

##### `confidenceThreshold`<sup>Optional</sup> <a name="confidenceThreshold" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.confidenceThreshold"></a>

```typescript
public readonly confidenceThreshold: string;
```

- *Type:* string

ConfidenceThreshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_firewall_rule_group#confidence_threshold Route53ResolverFirewallRuleGroup#confidence_threshold}

---

##### `dnsThreatProtection`<sup>Optional</sup> <a name="dnsThreatProtection" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.dnsThreatProtection"></a>

```typescript
public readonly dnsThreatProtection: string;
```

- *Type:* string

DnsThreatProtection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_firewall_rule_group#dns_threat_protection Route53ResolverFirewallRuleGroup#dns_threat_protection}

---

##### `firewallDomainListId`<sup>Optional</sup> <a name="firewallDomainListId" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.firewallDomainListId"></a>

```typescript
public readonly firewallDomainListId: string;
```

- *Type:* string

ResourceId.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_firewall_rule_group#firewall_domain_list_id Route53ResolverFirewallRuleGroup#firewall_domain_list_id}

---

##### `firewallDomainRedirectionAction`<sup>Optional</sup> <a name="firewallDomainRedirectionAction" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.firewallDomainRedirectionAction"></a>

```typescript
public readonly firewallDomainRedirectionAction: string;
```

- *Type:* string

FirewallDomainRedirectionAction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_firewall_rule_group#firewall_domain_redirection_action Route53ResolverFirewallRuleGroup#firewall_domain_redirection_action}

---

##### `firewallRuleType`<sup>Optional</sup> <a name="firewallRuleType" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.firewallRuleType"></a>

```typescript
public readonly firewallRuleType: Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType;
```

- *Type:* <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType</a>

Advanced firewall rule type. Mutually exclusive with FirewallDomainListId and DnsThreatProtection/ConfidenceThreshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_firewall_rule_group#firewall_rule_type Route53ResolverFirewallRuleGroup#firewall_rule_type}

---

##### `firewallThreatProtectionId`<sup>Optional</sup> <a name="firewallThreatProtectionId" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.firewallThreatProtectionId"></a>

```typescript
public readonly firewallThreatProtectionId: string;
```

- *Type:* string

ResourceId.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_firewall_rule_group#firewall_threat_protection_id Route53ResolverFirewallRuleGroup#firewall_threat_protection_id}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

Rule Priority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_firewall_rule_group#priority Route53ResolverFirewallRuleGroup#priority}

---

##### `qtype`<sup>Optional</sup> <a name="qtype" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.qtype"></a>

```typescript
public readonly qtype: string;
```

- *Type:* string

Qtype.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_firewall_rule_group#qtype Route53ResolverFirewallRuleGroup#qtype}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

The status of the firewall rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_firewall_rule_group#status Route53ResolverFirewallRuleGroup#status}

---

### Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType <a name="Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType.Initializer"></a>

```typescript
import { route53ResolverFirewallRuleGroup } from '@cdktn/provider-awscc'

const route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType: route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType.property.firewallAdvancedContentCategory">firewallAdvancedContentCategory</a></code> | <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory</a></code> | Configuration for an advanced content category rule type. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType.property.firewallAdvancedThreatCategory">firewallAdvancedThreatCategory</a></code> | <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory</a></code> | Configuration for an advanced threat category rule type. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType.property.partnerThreatProtection">partnerThreatProtection</a></code> | <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection</a></code> | Configuration for a partner threat protection rule type. |

---

##### `firewallAdvancedContentCategory`<sup>Optional</sup> <a name="firewallAdvancedContentCategory" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType.property.firewallAdvancedContentCategory"></a>

```typescript
public readonly firewallAdvancedContentCategory: Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory;
```

- *Type:* <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory</a>

Configuration for an advanced content category rule type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_firewall_rule_group#firewall_advanced_content_category Route53ResolverFirewallRuleGroup#firewall_advanced_content_category}

---

##### `firewallAdvancedThreatCategory`<sup>Optional</sup> <a name="firewallAdvancedThreatCategory" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType.property.firewallAdvancedThreatCategory"></a>

```typescript
public readonly firewallAdvancedThreatCategory: Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory;
```

- *Type:* <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory</a>

Configuration for an advanced threat category rule type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_firewall_rule_group#firewall_advanced_threat_category Route53ResolverFirewallRuleGroup#firewall_advanced_threat_category}

---

##### `partnerThreatProtection`<sup>Optional</sup> <a name="partnerThreatProtection" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType.property.partnerThreatProtection"></a>

```typescript
public readonly partnerThreatProtection: Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection;
```

- *Type:* <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection</a>

Configuration for a partner threat protection rule type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_firewall_rule_group#partner_threat_protection Route53ResolverFirewallRuleGroup#partner_threat_protection}

---

### Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory <a name="Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory.Initializer"></a>

```typescript
import { route53ResolverFirewallRuleGroup } from '@cdktn/provider-awscc'

const route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory: route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory.property.category">category</a></code> | <code>string</code> | The content category value. |

---

##### `category`<sup>Optional</sup> <a name="category" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

The content category value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_firewall_rule_group#category Route53ResolverFirewallRuleGroup#category}

---

### Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory <a name="Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory.Initializer"></a>

```typescript
import { route53ResolverFirewallRuleGroup } from '@cdktn/provider-awscc'

const route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory: route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory.property.category">category</a></code> | <code>string</code> | The threat category value. |

---

##### `category`<sup>Optional</sup> <a name="category" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

The threat category value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_firewall_rule_group#category Route53ResolverFirewallRuleGroup#category}

---

### Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection <a name="Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection.Initializer"></a>

```typescript
import { route53ResolverFirewallRuleGroup } from '@cdktn/provider-awscc'

const route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection: route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection.property.partner">partner</a></code> | <code>string</code> | The partner identifier value. |

---

##### `partner`<sup>Optional</sup> <a name="partner" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection.property.partner"></a>

```typescript
public readonly partner: string;
```

- *Type:* string

The partner identifier value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_firewall_rule_group#partner Route53ResolverFirewallRuleGroup#partner}

---

### Route53ResolverFirewallRuleGroupTags <a name="Route53ResolverFirewallRuleGroupTags" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTags.Initializer"></a>

```typescript
import { route53ResolverFirewallRuleGroup } from '@cdktn/provider-awscc'

const route53ResolverFirewallRuleGroupTags: route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_firewall_rule_group#key Route53ResolverFirewallRuleGroup#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_firewall_rule_group#value Route53ResolverFirewallRuleGroup#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference <a name="Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.Initializer"></a>

```typescript
import { route53ResolverFirewallRuleGroup } from '@cdktn/provider-awscc'

new route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.resetCategory">resetCategory</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCategory` <a name="resetCategory" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.resetCategory"></a>

```typescript
public resetCategory(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.property.categoryInput">categoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.property.category">category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `categoryInput`<sup>Optional</sup> <a name="categoryInput" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.property.categoryInput"></a>

```typescript
public readonly categoryInput: string;
```

- *Type:* string

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory</a>

---


### Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference <a name="Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.Initializer"></a>

```typescript
import { route53ResolverFirewallRuleGroup } from '@cdktn/provider-awscc'

new route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.resetCategory">resetCategory</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCategory` <a name="resetCategory" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.resetCategory"></a>

```typescript
public resetCategory(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.property.categoryInput">categoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.property.category">category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `categoryInput`<sup>Optional</sup> <a name="categoryInput" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.property.categoryInput"></a>

```typescript
public readonly categoryInput: string;
```

- *Type:* string

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory</a>

---


### Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference <a name="Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.Initializer"></a>

```typescript
import { route53ResolverFirewallRuleGroup } from '@cdktn/provider-awscc'

new route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.putFirewallAdvancedContentCategory">putFirewallAdvancedContentCategory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.putFirewallAdvancedThreatCategory">putFirewallAdvancedThreatCategory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.putPartnerThreatProtection">putPartnerThreatProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.resetFirewallAdvancedContentCategory">resetFirewallAdvancedContentCategory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.resetFirewallAdvancedThreatCategory">resetFirewallAdvancedThreatCategory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.resetPartnerThreatProtection">resetPartnerThreatProtection</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFirewallAdvancedContentCategory` <a name="putFirewallAdvancedContentCategory" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.putFirewallAdvancedContentCategory"></a>

```typescript
public putFirewallAdvancedContentCategory(value: Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.putFirewallAdvancedContentCategory.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory</a>

---

##### `putFirewallAdvancedThreatCategory` <a name="putFirewallAdvancedThreatCategory" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.putFirewallAdvancedThreatCategory"></a>

```typescript
public putFirewallAdvancedThreatCategory(value: Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.putFirewallAdvancedThreatCategory.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory</a>

---

##### `putPartnerThreatProtection` <a name="putPartnerThreatProtection" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.putPartnerThreatProtection"></a>

```typescript
public putPartnerThreatProtection(value: Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.putPartnerThreatProtection.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection</a>

---

##### `resetFirewallAdvancedContentCategory` <a name="resetFirewallAdvancedContentCategory" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.resetFirewallAdvancedContentCategory"></a>

```typescript
public resetFirewallAdvancedContentCategory(): void
```

##### `resetFirewallAdvancedThreatCategory` <a name="resetFirewallAdvancedThreatCategory" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.resetFirewallAdvancedThreatCategory"></a>

```typescript
public resetFirewallAdvancedThreatCategory(): void
```

##### `resetPartnerThreatProtection` <a name="resetPartnerThreatProtection" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.resetPartnerThreatProtection"></a>

```typescript
public resetPartnerThreatProtection(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.property.firewallAdvancedContentCategory">firewallAdvancedContentCategory</a></code> | <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.property.firewallAdvancedThreatCategory">firewallAdvancedThreatCategory</a></code> | <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.property.partnerThreatProtection">partnerThreatProtection</a></code> | <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.property.firewallAdvancedContentCategoryInput">firewallAdvancedContentCategoryInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.property.firewallAdvancedThreatCategoryInput">firewallAdvancedThreatCategoryInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.property.partnerThreatProtectionInput">partnerThreatProtectionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `firewallAdvancedContentCategory`<sup>Required</sup> <a name="firewallAdvancedContentCategory" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.property.firewallAdvancedContentCategory"></a>

```typescript
public readonly firewallAdvancedContentCategory: Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference</a>

---

##### `firewallAdvancedThreatCategory`<sup>Required</sup> <a name="firewallAdvancedThreatCategory" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.property.firewallAdvancedThreatCategory"></a>

```typescript
public readonly firewallAdvancedThreatCategory: Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference</a>

---

##### `partnerThreatProtection`<sup>Required</sup> <a name="partnerThreatProtection" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.property.partnerThreatProtection"></a>

```typescript
public readonly partnerThreatProtection: Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference</a>

---

##### `firewallAdvancedContentCategoryInput`<sup>Optional</sup> <a name="firewallAdvancedContentCategoryInput" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.property.firewallAdvancedContentCategoryInput"></a>

```typescript
public readonly firewallAdvancedContentCategoryInput: IResolvable | Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory</a>

---

##### `firewallAdvancedThreatCategoryInput`<sup>Optional</sup> <a name="firewallAdvancedThreatCategoryInput" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.property.firewallAdvancedThreatCategoryInput"></a>

```typescript
public readonly firewallAdvancedThreatCategoryInput: IResolvable | Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory</a>

---

##### `partnerThreatProtectionInput`<sup>Optional</sup> <a name="partnerThreatProtectionInput" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.property.partnerThreatProtectionInput"></a>

```typescript
public readonly partnerThreatProtectionInput: IResolvable | Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType</a>

---


### Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference <a name="Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.Initializer"></a>

```typescript
import { route53ResolverFirewallRuleGroup } from '@cdktn/provider-awscc'

new route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.resetPartner">resetPartner</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPartner` <a name="resetPartner" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.resetPartner"></a>

```typescript
public resetPartner(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.property.partnerInput">partnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.property.partner">partner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `partnerInput`<sup>Optional</sup> <a name="partnerInput" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.property.partnerInput"></a>

```typescript
public readonly partnerInput: string;
```

- *Type:* string

---

##### `partner`<sup>Required</sup> <a name="partner" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.property.partner"></a>

```typescript
public readonly partner: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection</a>

---


### Route53ResolverFirewallRuleGroupFirewallRulesList <a name="Route53ResolverFirewallRuleGroupFirewallRulesList" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.Initializer"></a>

```typescript
import { route53ResolverFirewallRuleGroup } from '@cdktn/provider-awscc'

new route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.get"></a>

```typescript
public get(index: number): Route53ResolverFirewallRuleGroupFirewallRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules">Route53ResolverFirewallRuleGroupFirewallRules</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Route53ResolverFirewallRuleGroupFirewallRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules">Route53ResolverFirewallRuleGroupFirewallRules</a>[]

---


### Route53ResolverFirewallRuleGroupFirewallRulesOutputReference <a name="Route53ResolverFirewallRuleGroupFirewallRulesOutputReference" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.Initializer"></a>

```typescript
import { route53ResolverFirewallRuleGroup } from '@cdktn/provider-awscc'

new route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.putFirewallRuleType">putFirewallRuleType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetBlockOverrideDnsType">resetBlockOverrideDnsType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetBlockOverrideDomain">resetBlockOverrideDomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetBlockOverrideTtl">resetBlockOverrideTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetBlockResponse">resetBlockResponse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetConfidenceThreshold">resetConfidenceThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetDnsThreatProtection">resetDnsThreatProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetFirewallDomainListId">resetFirewallDomainListId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetFirewallDomainRedirectionAction">resetFirewallDomainRedirectionAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetFirewallRuleType">resetFirewallRuleType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetFirewallThreatProtectionId">resetFirewallThreatProtectionId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetQtype">resetQtype</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetStatus">resetStatus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFirewallRuleType` <a name="putFirewallRuleType" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.putFirewallRuleType"></a>

```typescript
public putFirewallRuleType(value: Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.putFirewallRuleType.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType</a>

---

##### `resetAction` <a name="resetAction" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetAction"></a>

```typescript
public resetAction(): void
```

##### `resetBlockOverrideDnsType` <a name="resetBlockOverrideDnsType" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetBlockOverrideDnsType"></a>

```typescript
public resetBlockOverrideDnsType(): void
```

##### `resetBlockOverrideDomain` <a name="resetBlockOverrideDomain" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetBlockOverrideDomain"></a>

```typescript
public resetBlockOverrideDomain(): void
```

##### `resetBlockOverrideTtl` <a name="resetBlockOverrideTtl" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetBlockOverrideTtl"></a>

```typescript
public resetBlockOverrideTtl(): void
```

##### `resetBlockResponse` <a name="resetBlockResponse" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetBlockResponse"></a>

```typescript
public resetBlockResponse(): void
```

##### `resetConfidenceThreshold` <a name="resetConfidenceThreshold" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetConfidenceThreshold"></a>

```typescript
public resetConfidenceThreshold(): void
```

##### `resetDnsThreatProtection` <a name="resetDnsThreatProtection" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetDnsThreatProtection"></a>

```typescript
public resetDnsThreatProtection(): void
```

##### `resetFirewallDomainListId` <a name="resetFirewallDomainListId" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetFirewallDomainListId"></a>

```typescript
public resetFirewallDomainListId(): void
```

##### `resetFirewallDomainRedirectionAction` <a name="resetFirewallDomainRedirectionAction" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetFirewallDomainRedirectionAction"></a>

```typescript
public resetFirewallDomainRedirectionAction(): void
```

##### `resetFirewallRuleType` <a name="resetFirewallRuleType" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetFirewallRuleType"></a>

```typescript
public resetFirewallRuleType(): void
```

##### `resetFirewallThreatProtectionId` <a name="resetFirewallThreatProtectionId" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetFirewallThreatProtectionId"></a>

```typescript
public resetFirewallThreatProtectionId(): void
```

##### `resetPriority` <a name="resetPriority" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetPriority"></a>

```typescript
public resetPriority(): void
```

##### `resetQtype` <a name="resetQtype" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetQtype"></a>

```typescript
public resetQtype(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetStatus"></a>

```typescript
public resetStatus(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.firewallRuleType">firewallRuleType</a></code> | <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.blockOverrideDnsTypeInput">blockOverrideDnsTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.blockOverrideDomainInput">blockOverrideDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.blockOverrideTtlInput">blockOverrideTtlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.blockResponseInput">blockResponseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.confidenceThresholdInput">confidenceThresholdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.dnsThreatProtectionInput">dnsThreatProtectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.firewallDomainListIdInput">firewallDomainListIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.firewallDomainRedirectionActionInput">firewallDomainRedirectionActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.firewallRuleTypeInput">firewallRuleTypeInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.firewallThreatProtectionIdInput">firewallThreatProtectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.qtypeInput">qtypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.blockOverrideDnsType">blockOverrideDnsType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.blockOverrideDomain">blockOverrideDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.blockOverrideTtl">blockOverrideTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.blockResponse">blockResponse</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.confidenceThreshold">confidenceThreshold</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.dnsThreatProtection">dnsThreatProtection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.firewallDomainListId">firewallDomainListId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.firewallDomainRedirectionAction">firewallDomainRedirectionAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.firewallThreatProtectionId">firewallThreatProtectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.qtype">qtype</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules">Route53ResolverFirewallRuleGroupFirewallRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `firewallRuleType`<sup>Required</sup> <a name="firewallRuleType" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.firewallRuleType"></a>

```typescript
public readonly firewallRuleType: Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `blockOverrideDnsTypeInput`<sup>Optional</sup> <a name="blockOverrideDnsTypeInput" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.blockOverrideDnsTypeInput"></a>

```typescript
public readonly blockOverrideDnsTypeInput: string;
```

- *Type:* string

---

##### `blockOverrideDomainInput`<sup>Optional</sup> <a name="blockOverrideDomainInput" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.blockOverrideDomainInput"></a>

```typescript
public readonly blockOverrideDomainInput: string;
```

- *Type:* string

---

##### `blockOverrideTtlInput`<sup>Optional</sup> <a name="blockOverrideTtlInput" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.blockOverrideTtlInput"></a>

```typescript
public readonly blockOverrideTtlInput: number;
```

- *Type:* number

---

##### `blockResponseInput`<sup>Optional</sup> <a name="blockResponseInput" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.blockResponseInput"></a>

```typescript
public readonly blockResponseInput: string;
```

- *Type:* string

---

##### `confidenceThresholdInput`<sup>Optional</sup> <a name="confidenceThresholdInput" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.confidenceThresholdInput"></a>

```typescript
public readonly confidenceThresholdInput: string;
```

- *Type:* string

---

##### `dnsThreatProtectionInput`<sup>Optional</sup> <a name="dnsThreatProtectionInput" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.dnsThreatProtectionInput"></a>

```typescript
public readonly dnsThreatProtectionInput: string;
```

- *Type:* string

---

##### `firewallDomainListIdInput`<sup>Optional</sup> <a name="firewallDomainListIdInput" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.firewallDomainListIdInput"></a>

```typescript
public readonly firewallDomainListIdInput: string;
```

- *Type:* string

---

##### `firewallDomainRedirectionActionInput`<sup>Optional</sup> <a name="firewallDomainRedirectionActionInput" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.firewallDomainRedirectionActionInput"></a>

```typescript
public readonly firewallDomainRedirectionActionInput: string;
```

- *Type:* string

---

##### `firewallRuleTypeInput`<sup>Optional</sup> <a name="firewallRuleTypeInput" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.firewallRuleTypeInput"></a>

```typescript
public readonly firewallRuleTypeInput: IResolvable | Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType</a>

---

##### `firewallThreatProtectionIdInput`<sup>Optional</sup> <a name="firewallThreatProtectionIdInput" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.firewallThreatProtectionIdInput"></a>

```typescript
public readonly firewallThreatProtectionIdInput: string;
```

- *Type:* string

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `qtypeInput`<sup>Optional</sup> <a name="qtypeInput" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.qtypeInput"></a>

```typescript
public readonly qtypeInput: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `blockOverrideDnsType`<sup>Required</sup> <a name="blockOverrideDnsType" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.blockOverrideDnsType"></a>

```typescript
public readonly blockOverrideDnsType: string;
```

- *Type:* string

---

##### `blockOverrideDomain`<sup>Required</sup> <a name="blockOverrideDomain" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.blockOverrideDomain"></a>

```typescript
public readonly blockOverrideDomain: string;
```

- *Type:* string

---

##### `blockOverrideTtl`<sup>Required</sup> <a name="blockOverrideTtl" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.blockOverrideTtl"></a>

```typescript
public readonly blockOverrideTtl: number;
```

- *Type:* number

---

##### `blockResponse`<sup>Required</sup> <a name="blockResponse" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.blockResponse"></a>

```typescript
public readonly blockResponse: string;
```

- *Type:* string

---

##### `confidenceThreshold`<sup>Required</sup> <a name="confidenceThreshold" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.confidenceThreshold"></a>

```typescript
public readonly confidenceThreshold: string;
```

- *Type:* string

---

##### `dnsThreatProtection`<sup>Required</sup> <a name="dnsThreatProtection" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.dnsThreatProtection"></a>

```typescript
public readonly dnsThreatProtection: string;
```

- *Type:* string

---

##### `firewallDomainListId`<sup>Required</sup> <a name="firewallDomainListId" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.firewallDomainListId"></a>

```typescript
public readonly firewallDomainListId: string;
```

- *Type:* string

---

##### `firewallDomainRedirectionAction`<sup>Required</sup> <a name="firewallDomainRedirectionAction" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.firewallDomainRedirectionAction"></a>

```typescript
public readonly firewallDomainRedirectionAction: string;
```

- *Type:* string

---

##### `firewallThreatProtectionId`<sup>Required</sup> <a name="firewallThreatProtectionId" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.firewallThreatProtectionId"></a>

```typescript
public readonly firewallThreatProtectionId: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `qtype`<sup>Required</sup> <a name="qtype" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.qtype"></a>

```typescript
public readonly qtype: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Route53ResolverFirewallRuleGroupFirewallRules;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules">Route53ResolverFirewallRuleGroupFirewallRules</a>

---


### Route53ResolverFirewallRuleGroupTagsList <a name="Route53ResolverFirewallRuleGroupTagsList" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.Initializer"></a>

```typescript
import { route53ResolverFirewallRuleGroup } from '@cdktn/provider-awscc'

new route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.get"></a>

```typescript
public get(index: number): Route53ResolverFirewallRuleGroupTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTags">Route53ResolverFirewallRuleGroupTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Route53ResolverFirewallRuleGroupTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTags">Route53ResolverFirewallRuleGroupTags</a>[]

---


### Route53ResolverFirewallRuleGroupTagsOutputReference <a name="Route53ResolverFirewallRuleGroupTagsOutputReference" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.Initializer"></a>

```typescript
import { route53ResolverFirewallRuleGroup } from '@cdktn/provider-awscc'

new route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTags">Route53ResolverFirewallRuleGroupTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Route53ResolverFirewallRuleGroupTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTags">Route53ResolverFirewallRuleGroupTags</a>

---



