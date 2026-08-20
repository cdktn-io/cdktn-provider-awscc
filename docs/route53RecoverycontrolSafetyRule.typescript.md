# `route53RecoverycontrolSafetyRule` Submodule <a name="`route53RecoverycontrolSafetyRule` Submodule" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53RecoverycontrolSafetyRule <a name="Route53RecoverycontrolSafetyRule" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53recoverycontrol_safety_rule awscc_route53recoverycontrol_safety_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.Initializer"></a>

```typescript
import { route53RecoverycontrolSafetyRule } from '@cdktn/provider-awscc'

new route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule(scope: Construct, id: string, config?: Route53RecoverycontrolSafetyRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleConfig">Route53RecoverycontrolSafetyRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleConfig">Route53RecoverycontrolSafetyRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.putAssertionRule">putAssertionRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.putGatingRule">putGatingRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.putRuleConfig">putRuleConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.resetAssertionRule">resetAssertionRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.resetControlPanelArn">resetControlPanelArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.resetGatingRule">resetGatingRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.resetRuleConfig">resetRuleConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAssertionRule` <a name="putAssertionRule" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.putAssertionRule"></a>

```typescript
public putAssertionRule(value: Route53RecoverycontrolSafetyRuleAssertionRule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.putAssertionRule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRule">Route53RecoverycontrolSafetyRuleAssertionRule</a>

---

##### `putGatingRule` <a name="putGatingRule" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.putGatingRule"></a>

```typescript
public putGatingRule(value: Route53RecoverycontrolSafetyRuleGatingRule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.putGatingRule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRule">Route53RecoverycontrolSafetyRuleGatingRule</a>

---

##### `putRuleConfig` <a name="putRuleConfig" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.putRuleConfig"></a>

```typescript
public putRuleConfig(value: Route53RecoverycontrolSafetyRuleRuleConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.putRuleConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfig">Route53RecoverycontrolSafetyRuleRuleConfig</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.putTags"></a>

```typescript
public putTags(value: IResolvable | Route53RecoverycontrolSafetyRuleTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTags">Route53RecoverycontrolSafetyRuleTags</a>[]

---

##### `resetAssertionRule` <a name="resetAssertionRule" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.resetAssertionRule"></a>

```typescript
public resetAssertionRule(): void
```

##### `resetControlPanelArn` <a name="resetControlPanelArn" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.resetControlPanelArn"></a>

```typescript
public resetControlPanelArn(): void
```

##### `resetGatingRule` <a name="resetGatingRule" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.resetGatingRule"></a>

```typescript
public resetGatingRule(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.resetName"></a>

```typescript
public resetName(): void
```

##### `resetRuleConfig` <a name="resetRuleConfig" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.resetRuleConfig"></a>

```typescript
public resetRuleConfig(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Route53RecoverycontrolSafetyRule resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.isConstruct"></a>

```typescript
import { route53RecoverycontrolSafetyRule } from '@cdktn/provider-awscc'

route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.isTerraformElement"></a>

```typescript
import { route53RecoverycontrolSafetyRule } from '@cdktn/provider-awscc'

route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.isTerraformResource"></a>

```typescript
import { route53RecoverycontrolSafetyRule } from '@cdktn/provider-awscc'

route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.generateConfigForImport"></a>

```typescript
import { route53RecoverycontrolSafetyRule } from '@cdktn/provider-awscc'

route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a Route53RecoverycontrolSafetyRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Route53RecoverycontrolSafetyRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Route53RecoverycontrolSafetyRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53recoverycontrol_safety_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Route53RecoverycontrolSafetyRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.assertionRule">assertionRule</a></code> | <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference">Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.gatingRule">gatingRule</a></code> | <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference">Route53RecoverycontrolSafetyRuleGatingRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.ruleConfig">ruleConfig</a></code> | <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference">Route53RecoverycontrolSafetyRuleRuleConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.safetyRuleArn">safetyRuleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsList">Route53RecoverycontrolSafetyRuleTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.assertionRuleInput">assertionRuleInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRule">Route53RecoverycontrolSafetyRuleAssertionRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.controlPanelArnInput">controlPanelArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.gatingRuleInput">gatingRuleInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRule">Route53RecoverycontrolSafetyRuleGatingRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.ruleConfigInput">ruleConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfig">Route53RecoverycontrolSafetyRuleRuleConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTags">Route53RecoverycontrolSafetyRuleTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.controlPanelArn">controlPanelArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `assertionRule`<sup>Required</sup> <a name="assertionRule" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.assertionRule"></a>

```typescript
public readonly assertionRule: Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference">Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference</a>

---

##### `gatingRule`<sup>Required</sup> <a name="gatingRule" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.gatingRule"></a>

```typescript
public readonly gatingRule: Route53RecoverycontrolSafetyRuleGatingRuleOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference">Route53RecoverycontrolSafetyRuleGatingRuleOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ruleConfig`<sup>Required</sup> <a name="ruleConfig" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.ruleConfig"></a>

```typescript
public readonly ruleConfig: Route53RecoverycontrolSafetyRuleRuleConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference">Route53RecoverycontrolSafetyRuleRuleConfigOutputReference</a>

---

##### `safetyRuleArn`<sup>Required</sup> <a name="safetyRuleArn" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.safetyRuleArn"></a>

```typescript
public readonly safetyRuleArn: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.tags"></a>

```typescript
public readonly tags: Route53RecoverycontrolSafetyRuleTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsList">Route53RecoverycontrolSafetyRuleTagsList</a>

---

##### `assertionRuleInput`<sup>Optional</sup> <a name="assertionRuleInput" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.assertionRuleInput"></a>

```typescript
public readonly assertionRuleInput: IResolvable | Route53RecoverycontrolSafetyRuleAssertionRule;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRule">Route53RecoverycontrolSafetyRuleAssertionRule</a>

---

##### `controlPanelArnInput`<sup>Optional</sup> <a name="controlPanelArnInput" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.controlPanelArnInput"></a>

```typescript
public readonly controlPanelArnInput: string;
```

- *Type:* string

---

##### `gatingRuleInput`<sup>Optional</sup> <a name="gatingRuleInput" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.gatingRuleInput"></a>

```typescript
public readonly gatingRuleInput: IResolvable | Route53RecoverycontrolSafetyRuleGatingRule;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRule">Route53RecoverycontrolSafetyRuleGatingRule</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `ruleConfigInput`<sup>Optional</sup> <a name="ruleConfigInput" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.ruleConfigInput"></a>

```typescript
public readonly ruleConfigInput: IResolvable | Route53RecoverycontrolSafetyRuleRuleConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfig">Route53RecoverycontrolSafetyRuleRuleConfig</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | Route53RecoverycontrolSafetyRuleTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTags">Route53RecoverycontrolSafetyRuleTags</a>[]

---

##### `controlPanelArn`<sup>Required</sup> <a name="controlPanelArn" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.controlPanelArn"></a>

```typescript
public readonly controlPanelArn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Route53RecoverycontrolSafetyRuleAssertionRule <a name="Route53RecoverycontrolSafetyRuleAssertionRule" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRule.Initializer"></a>

```typescript
import { route53RecoverycontrolSafetyRule } from '@cdktn/provider-awscc'

const route53RecoverycontrolSafetyRuleAssertionRule: route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRule.property.assertedControls">assertedControls</a></code> | <code>string[]</code> | The routing controls that are part of transactions that are evaluated to determine if a request to change a routing control state is allowed. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRule.property.waitPeriodMs">waitPeriodMs</a></code> | <code>number</code> | An evaluation period, in milliseconds (ms), during which any request against the target routing controls will fail. |

---

##### `assertedControls`<sup>Optional</sup> <a name="assertedControls" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRule.property.assertedControls"></a>

```typescript
public readonly assertedControls: string[];
```

- *Type:* string[]

The routing controls that are part of transactions that are evaluated to determine if a request to change a routing control state is allowed.

For example, you might include three routing controls, one for each of three AWS Regions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53recoverycontrol_safety_rule#asserted_controls Route53RecoverycontrolSafetyRule#asserted_controls}

---

##### `waitPeriodMs`<sup>Optional</sup> <a name="waitPeriodMs" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRule.property.waitPeriodMs"></a>

```typescript
public readonly waitPeriodMs: number;
```

- *Type:* number

An evaluation period, in milliseconds (ms), during which any request against the target routing controls will fail.

This helps prevent "flapping" of state. The wait period is 5000 ms by default, but you can choose a custom value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53recoverycontrol_safety_rule#wait_period_ms Route53RecoverycontrolSafetyRule#wait_period_ms}

---

### Route53RecoverycontrolSafetyRuleConfig <a name="Route53RecoverycontrolSafetyRuleConfig" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleConfig.Initializer"></a>

```typescript
import { route53RecoverycontrolSafetyRule } from '@cdktn/provider-awscc'

const route53RecoverycontrolSafetyRuleConfig: route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleConfig.property.assertionRule">assertionRule</a></code> | <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRule">Route53RecoverycontrolSafetyRuleAssertionRule</a></code> | An assertion rule enforces that, when a routing control state is changed, that the criteria set by the rule configuration is met. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleConfig.property.controlPanelArn">controlPanelArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the control panel. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleConfig.property.gatingRule">gatingRule</a></code> | <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRule">Route53RecoverycontrolSafetyRuleGatingRule</a></code> | A gating rule verifies that a set of gating controls evaluates as true, based on a rule configuration that you specify. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleConfig.property.name">name</a></code> | <code>string</code> | The name for the safety rule. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleConfig.property.ruleConfig">ruleConfig</a></code> | <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfig">Route53RecoverycontrolSafetyRuleRuleConfig</a></code> | The rule configuration for an assertion rule or gating rule. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTags">Route53RecoverycontrolSafetyRuleTags</a>[]</code> | A collection of tags associated with a resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `assertionRule`<sup>Optional</sup> <a name="assertionRule" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleConfig.property.assertionRule"></a>

```typescript
public readonly assertionRule: Route53RecoverycontrolSafetyRuleAssertionRule;
```

- *Type:* <a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRule">Route53RecoverycontrolSafetyRuleAssertionRule</a>

An assertion rule enforces that, when a routing control state is changed, that the criteria set by the rule configuration is met.

Otherwise, the change to the routing control is not accepted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53recoverycontrol_safety_rule#assertion_rule Route53RecoverycontrolSafetyRule#assertion_rule}

---

##### `controlPanelArn`<sup>Optional</sup> <a name="controlPanelArn" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleConfig.property.controlPanelArn"></a>

```typescript
public readonly controlPanelArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the control panel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53recoverycontrol_safety_rule#control_panel_arn Route53RecoverycontrolSafetyRule#control_panel_arn}

---

##### `gatingRule`<sup>Optional</sup> <a name="gatingRule" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleConfig.property.gatingRule"></a>

```typescript
public readonly gatingRule: Route53RecoverycontrolSafetyRuleGatingRule;
```

- *Type:* <a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRule">Route53RecoverycontrolSafetyRuleGatingRule</a>

A gating rule verifies that a set of gating controls evaluates as true, based on a rule configuration that you specify.

If the gating rule evaluates to true, Amazon Route 53 Application Recovery Controller allows a set of routing control state changes to run and complete against the set of target controls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53recoverycontrol_safety_rule#gating_rule Route53RecoverycontrolSafetyRule#gating_rule}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name for the safety rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53recoverycontrol_safety_rule#name Route53RecoverycontrolSafetyRule#name}

---

##### `ruleConfig`<sup>Optional</sup> <a name="ruleConfig" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleConfig.property.ruleConfig"></a>

```typescript
public readonly ruleConfig: Route53RecoverycontrolSafetyRuleRuleConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfig">Route53RecoverycontrolSafetyRuleRuleConfig</a>

The rule configuration for an assertion rule or gating rule.

This is the criteria that you set for specific assertion controls (routing controls) or gating controls. This configuration specifies how many controls must be enabled after a transaction completes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53recoverycontrol_safety_rule#rule_config Route53RecoverycontrolSafetyRule#rule_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | Route53RecoverycontrolSafetyRuleTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTags">Route53RecoverycontrolSafetyRuleTags</a>[]

A collection of tags associated with a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53recoverycontrol_safety_rule#tags Route53RecoverycontrolSafetyRule#tags}

---

### Route53RecoverycontrolSafetyRuleGatingRule <a name="Route53RecoverycontrolSafetyRuleGatingRule" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRule.Initializer"></a>

```typescript
import { route53RecoverycontrolSafetyRule } from '@cdktn/provider-awscc'

const route53RecoverycontrolSafetyRuleGatingRule: route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRule.property.gatingControls">gatingControls</a></code> | <code>string[]</code> | The gating controls for the gating rule. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRule.property.targetControls">targetControls</a></code> | <code>string[]</code> | Routing controls that can only be set or unset if the specified RuleConfig evaluates to true for the specified GatingControls. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRule.property.waitPeriodMs">waitPeriodMs</a></code> | <code>number</code> | An evaluation period, in milliseconds (ms), during which any request against the target routing controls will fail. |

---

##### `gatingControls`<sup>Optional</sup> <a name="gatingControls" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRule.property.gatingControls"></a>

```typescript
public readonly gatingControls: string[];
```

- *Type:* string[]

The gating controls for the gating rule.

That is, routing controls that are evaluated by the rule configuration that you specify.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53recoverycontrol_safety_rule#gating_controls Route53RecoverycontrolSafetyRule#gating_controls}

---

##### `targetControls`<sup>Optional</sup> <a name="targetControls" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRule.property.targetControls"></a>

```typescript
public readonly targetControls: string[];
```

- *Type:* string[]

Routing controls that can only be set or unset if the specified RuleConfig evaluates to true for the specified GatingControls.

For example, say you have three gating controls, one for each of three AWS Regions. Now you specify AtLeast 2 as your RuleConfig. With these settings, you can only change (set or unset) the routing controls that you have specified as TargetControls if that rule evaluates to true. 
In other words, your ability to change the routing controls that you have specified as TargetControls is gated by the rule that you set for the routing controls in GatingControls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53recoverycontrol_safety_rule#target_controls Route53RecoverycontrolSafetyRule#target_controls}

---

##### `waitPeriodMs`<sup>Optional</sup> <a name="waitPeriodMs" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRule.property.waitPeriodMs"></a>

```typescript
public readonly waitPeriodMs: number;
```

- *Type:* number

An evaluation period, in milliseconds (ms), during which any request against the target routing controls will fail.

This helps prevent "flapping" of state. The wait period is 5000 ms by default, but you can choose a custom value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53recoverycontrol_safety_rule#wait_period_ms Route53RecoverycontrolSafetyRule#wait_period_ms}

---

### Route53RecoverycontrolSafetyRuleRuleConfig <a name="Route53RecoverycontrolSafetyRuleRuleConfig" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfig.Initializer"></a>

```typescript
import { route53RecoverycontrolSafetyRule } from '@cdktn/provider-awscc'

const route53RecoverycontrolSafetyRuleRuleConfig: route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfig.property.inverted">inverted</a></code> | <code>boolean \| cdktn.IResolvable</code> | Logical negation of the rule. If the rule would usually evaluate true, it's evaluated as false, and vice versa. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfig.property.threshold">threshold</a></code> | <code>number</code> | The value of N, when you specify an ATLEAST rule type. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfig.property.type">type</a></code> | <code>string</code> | A rule can be one of the following: ATLEAST, AND, or OR. |

---

##### `inverted`<sup>Optional</sup> <a name="inverted" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfig.property.inverted"></a>

```typescript
public readonly inverted: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Logical negation of the rule. If the rule would usually evaluate true, it's evaluated as false, and vice versa.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53recoverycontrol_safety_rule#inverted Route53RecoverycontrolSafetyRule#inverted}

---

##### `threshold`<sup>Optional</sup> <a name="threshold" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfig.property.threshold"></a>

```typescript
public readonly threshold: number;
```

- *Type:* number

The value of N, when you specify an ATLEAST rule type.

That is, Threshold is the number of controls that must be set when you specify an ATLEAST type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53recoverycontrol_safety_rule#threshold Route53RecoverycontrolSafetyRule#threshold}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

A rule can be one of the following: ATLEAST, AND, or OR.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53recoverycontrol_safety_rule#type Route53RecoverycontrolSafetyRule#type}

---

### Route53RecoverycontrolSafetyRuleTags <a name="Route53RecoverycontrolSafetyRuleTags" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTags.Initializer"></a>

```typescript
import { route53RecoverycontrolSafetyRule } from '@cdktn/provider-awscc'

const route53RecoverycontrolSafetyRuleTags: route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53recoverycontrol_safety_rule#key Route53RecoverycontrolSafetyRule#key}. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53recoverycontrol_safety_rule#value Route53RecoverycontrolSafetyRule#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53recoverycontrol_safety_rule#key Route53RecoverycontrolSafetyRule#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53recoverycontrol_safety_rule#value Route53RecoverycontrolSafetyRule#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference <a name="Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.Initializer"></a>

```typescript
import { route53RecoverycontrolSafetyRule } from '@cdktn/provider-awscc'

new route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.resetAssertedControls">resetAssertedControls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.resetWaitPeriodMs">resetWaitPeriodMs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAssertedControls` <a name="resetAssertedControls" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.resetAssertedControls"></a>

```typescript
public resetAssertedControls(): void
```

##### `resetWaitPeriodMs` <a name="resetWaitPeriodMs" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.resetWaitPeriodMs"></a>

```typescript
public resetWaitPeriodMs(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.property.assertedControlsInput">assertedControlsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.property.waitPeriodMsInput">waitPeriodMsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.property.assertedControls">assertedControls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.property.waitPeriodMs">waitPeriodMs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRule">Route53RecoverycontrolSafetyRuleAssertionRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `assertedControlsInput`<sup>Optional</sup> <a name="assertedControlsInput" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.property.assertedControlsInput"></a>

```typescript
public readonly assertedControlsInput: string[];
```

- *Type:* string[]

---

##### `waitPeriodMsInput`<sup>Optional</sup> <a name="waitPeriodMsInput" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.property.waitPeriodMsInput"></a>

```typescript
public readonly waitPeriodMsInput: number;
```

- *Type:* number

---

##### `assertedControls`<sup>Required</sup> <a name="assertedControls" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.property.assertedControls"></a>

```typescript
public readonly assertedControls: string[];
```

- *Type:* string[]

---

##### `waitPeriodMs`<sup>Required</sup> <a name="waitPeriodMs" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.property.waitPeriodMs"></a>

```typescript
public readonly waitPeriodMs: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Route53RecoverycontrolSafetyRuleAssertionRule;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRule">Route53RecoverycontrolSafetyRuleAssertionRule</a>

---


### Route53RecoverycontrolSafetyRuleGatingRuleOutputReference <a name="Route53RecoverycontrolSafetyRuleGatingRuleOutputReference" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.Initializer"></a>

```typescript
import { route53RecoverycontrolSafetyRule } from '@cdktn/provider-awscc'

new route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.resetGatingControls">resetGatingControls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.resetTargetControls">resetTargetControls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.resetWaitPeriodMs">resetWaitPeriodMs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGatingControls` <a name="resetGatingControls" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.resetGatingControls"></a>

```typescript
public resetGatingControls(): void
```

##### `resetTargetControls` <a name="resetTargetControls" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.resetTargetControls"></a>

```typescript
public resetTargetControls(): void
```

##### `resetWaitPeriodMs` <a name="resetWaitPeriodMs" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.resetWaitPeriodMs"></a>

```typescript
public resetWaitPeriodMs(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.property.gatingControlsInput">gatingControlsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.property.targetControlsInput">targetControlsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.property.waitPeriodMsInput">waitPeriodMsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.property.gatingControls">gatingControls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.property.targetControls">targetControls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.property.waitPeriodMs">waitPeriodMs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRule">Route53RecoverycontrolSafetyRuleGatingRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `gatingControlsInput`<sup>Optional</sup> <a name="gatingControlsInput" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.property.gatingControlsInput"></a>

```typescript
public readonly gatingControlsInput: string[];
```

- *Type:* string[]

---

##### `targetControlsInput`<sup>Optional</sup> <a name="targetControlsInput" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.property.targetControlsInput"></a>

```typescript
public readonly targetControlsInput: string[];
```

- *Type:* string[]

---

##### `waitPeriodMsInput`<sup>Optional</sup> <a name="waitPeriodMsInput" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.property.waitPeriodMsInput"></a>

```typescript
public readonly waitPeriodMsInput: number;
```

- *Type:* number

---

##### `gatingControls`<sup>Required</sup> <a name="gatingControls" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.property.gatingControls"></a>

```typescript
public readonly gatingControls: string[];
```

- *Type:* string[]

---

##### `targetControls`<sup>Required</sup> <a name="targetControls" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.property.targetControls"></a>

```typescript
public readonly targetControls: string[];
```

- *Type:* string[]

---

##### `waitPeriodMs`<sup>Required</sup> <a name="waitPeriodMs" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.property.waitPeriodMs"></a>

```typescript
public readonly waitPeriodMs: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Route53RecoverycontrolSafetyRuleGatingRule;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRule">Route53RecoverycontrolSafetyRuleGatingRule</a>

---


### Route53RecoverycontrolSafetyRuleRuleConfigOutputReference <a name="Route53RecoverycontrolSafetyRuleRuleConfigOutputReference" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.Initializer"></a>

```typescript
import { route53RecoverycontrolSafetyRule } from '@cdktn/provider-awscc'

new route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.resetInverted">resetInverted</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.resetThreshold">resetThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInverted` <a name="resetInverted" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.resetInverted"></a>

```typescript
public resetInverted(): void
```

##### `resetThreshold` <a name="resetThreshold" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.resetThreshold"></a>

```typescript
public resetThreshold(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.property.invertedInput">invertedInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.property.thresholdInput">thresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.property.inverted">inverted</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.property.threshold">threshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfig">Route53RecoverycontrolSafetyRuleRuleConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `invertedInput`<sup>Optional</sup> <a name="invertedInput" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.property.invertedInput"></a>

```typescript
public readonly invertedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `thresholdInput`<sup>Optional</sup> <a name="thresholdInput" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.property.thresholdInput"></a>

```typescript
public readonly thresholdInput: number;
```

- *Type:* number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `inverted`<sup>Required</sup> <a name="inverted" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.property.inverted"></a>

```typescript
public readonly inverted: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.property.threshold"></a>

```typescript
public readonly threshold: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Route53RecoverycontrolSafetyRuleRuleConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfig">Route53RecoverycontrolSafetyRuleRuleConfig</a>

---


### Route53RecoverycontrolSafetyRuleTagsList <a name="Route53RecoverycontrolSafetyRuleTagsList" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsList.Initializer"></a>

```typescript
import { route53RecoverycontrolSafetyRule } from '@cdktn/provider-awscc'

new route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsList.get"></a>

```typescript
public get(index: number): Route53RecoverycontrolSafetyRuleTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTags">Route53RecoverycontrolSafetyRuleTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Route53RecoverycontrolSafetyRuleTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTags">Route53RecoverycontrolSafetyRuleTags</a>[]

---


### Route53RecoverycontrolSafetyRuleTagsOutputReference <a name="Route53RecoverycontrolSafetyRuleTagsOutputReference" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.Initializer"></a>

```typescript
import { route53RecoverycontrolSafetyRule } from '@cdktn/provider-awscc'

new route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTags">Route53RecoverycontrolSafetyRuleTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Route53RecoverycontrolSafetyRuleTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTags">Route53RecoverycontrolSafetyRuleTags</a>

---



