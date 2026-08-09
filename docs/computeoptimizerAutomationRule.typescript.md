# `computeoptimizerAutomationRule` Submodule <a name="`computeoptimizerAutomationRule` Submodule" id="@cdktn/provider-awscc.computeoptimizerAutomationRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeoptimizerAutomationRule <a name="ComputeoptimizerAutomationRule" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule awscc_computeoptimizer_automation_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.Initializer"></a>

```typescript
import { computeoptimizerAutomationRule } from '@cdktn/provider-awscc'

new computeoptimizerAutomationRule.ComputeoptimizerAutomationRule(scope: Construct, id: string, config: ComputeoptimizerAutomationRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig">ComputeoptimizerAutomationRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig">ComputeoptimizerAutomationRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.putCriteria">putCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.putOrganizationConfiguration">putOrganizationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.putSchedule">putSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.resetCriteria">resetCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.resetOrganizationConfiguration">resetOrganizationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCriteria` <a name="putCriteria" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.putCriteria"></a>

```typescript
public putCriteria(value: ComputeoptimizerAutomationRuleCriteria): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.putCriteria.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteria">ComputeoptimizerAutomationRuleCriteria</a>

---

##### `putOrganizationConfiguration` <a name="putOrganizationConfiguration" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.putOrganizationConfiguration"></a>

```typescript
public putOrganizationConfiguration(value: ComputeoptimizerAutomationRuleOrganizationConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.putOrganizationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfiguration">ComputeoptimizerAutomationRuleOrganizationConfiguration</a>

---

##### `putSchedule` <a name="putSchedule" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.putSchedule"></a>

```typescript
public putSchedule(value: ComputeoptimizerAutomationRuleSchedule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.putSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleSchedule">ComputeoptimizerAutomationRuleSchedule</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.putTags"></a>

```typescript
public putTags(value: IResolvable | ComputeoptimizerAutomationRuleTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTags">ComputeoptimizerAutomationRuleTags</a>[]

---

##### `resetCriteria` <a name="resetCriteria" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.resetCriteria"></a>

```typescript
public resetCriteria(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetOrganizationConfiguration` <a name="resetOrganizationConfiguration" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.resetOrganizationConfiguration"></a>

```typescript
public resetOrganizationConfiguration(): void
```

##### `resetPriority` <a name="resetPriority" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.resetPriority"></a>

```typescript
public resetPriority(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ComputeoptimizerAutomationRule resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.isConstruct"></a>

```typescript
import { computeoptimizerAutomationRule } from '@cdktn/provider-awscc'

computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.isTerraformElement"></a>

```typescript
import { computeoptimizerAutomationRule } from '@cdktn/provider-awscc'

computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.isTerraformResource"></a>

```typescript
import { computeoptimizerAutomationRule } from '@cdktn/provider-awscc'

computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.generateConfigForImport"></a>

```typescript
import { computeoptimizerAutomationRule } from '@cdktn/provider-awscc'

computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ComputeoptimizerAutomationRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComputeoptimizerAutomationRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComputeoptimizerAutomationRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ComputeoptimizerAutomationRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.createdTimestamp">createdTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.criteria">criteria</a></code> | <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference">ComputeoptimizerAutomationRuleCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.lastUpdatedTimestamp">lastUpdatedTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.organizationConfiguration">organizationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference">ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.ruleArn">ruleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.ruleId">ruleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.ruleRevision">ruleRevision</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference">ComputeoptimizerAutomationRuleScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsList">ComputeoptimizerAutomationRuleTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.criteriaInput">criteriaInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteria">ComputeoptimizerAutomationRuleCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.organizationConfigurationInput">organizationConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfiguration">ComputeoptimizerAutomationRuleOrganizationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.priorityInput">priorityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.recommendedActionTypesInput">recommendedActionTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.ruleTypeInput">ruleTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.scheduleInput">scheduleInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleSchedule">ComputeoptimizerAutomationRuleSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTags">ComputeoptimizerAutomationRuleTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.priority">priority</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.recommendedActionTypes">recommendedActionTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.ruleType">ruleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.status">status</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `createdTimestamp`<sup>Required</sup> <a name="createdTimestamp" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.createdTimestamp"></a>

```typescript
public readonly createdTimestamp: string;
```

- *Type:* string

---

##### `criteria`<sup>Required</sup> <a name="criteria" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.criteria"></a>

```typescript
public readonly criteria: ComputeoptimizerAutomationRuleCriteriaOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference">ComputeoptimizerAutomationRuleCriteriaOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastUpdatedTimestamp`<sup>Required</sup> <a name="lastUpdatedTimestamp" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.lastUpdatedTimestamp"></a>

```typescript
public readonly lastUpdatedTimestamp: string;
```

- *Type:* string

---

##### `organizationConfiguration`<sup>Required</sup> <a name="organizationConfiguration" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.organizationConfiguration"></a>

```typescript
public readonly organizationConfiguration: ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference">ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference</a>

---

##### `ruleArn`<sup>Required</sup> <a name="ruleArn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.ruleArn"></a>

```typescript
public readonly ruleArn: string;
```

- *Type:* string

---

##### `ruleId`<sup>Required</sup> <a name="ruleId" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.ruleId"></a>

```typescript
public readonly ruleId: string;
```

- *Type:* string

---

##### `ruleRevision`<sup>Required</sup> <a name="ruleRevision" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.ruleRevision"></a>

```typescript
public readonly ruleRevision: string;
```

- *Type:* string

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.schedule"></a>

```typescript
public readonly schedule: ComputeoptimizerAutomationRuleScheduleOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference">ComputeoptimizerAutomationRuleScheduleOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.tags"></a>

```typescript
public readonly tags: ComputeoptimizerAutomationRuleTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsList">ComputeoptimizerAutomationRuleTagsList</a>

---

##### `criteriaInput`<sup>Optional</sup> <a name="criteriaInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.criteriaInput"></a>

```typescript
public readonly criteriaInput: IResolvable | ComputeoptimizerAutomationRuleCriteria;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteria">ComputeoptimizerAutomationRuleCriteria</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `organizationConfigurationInput`<sup>Optional</sup> <a name="organizationConfigurationInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.organizationConfigurationInput"></a>

```typescript
public readonly organizationConfigurationInput: IResolvable | ComputeoptimizerAutomationRuleOrganizationConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfiguration">ComputeoptimizerAutomationRuleOrganizationConfiguration</a>

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.priorityInput"></a>

```typescript
public readonly priorityInput: string;
```

- *Type:* string

---

##### `recommendedActionTypesInput`<sup>Optional</sup> <a name="recommendedActionTypesInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.recommendedActionTypesInput"></a>

```typescript
public readonly recommendedActionTypesInput: string[];
```

- *Type:* string[]

---

##### `ruleTypeInput`<sup>Optional</sup> <a name="ruleTypeInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.ruleTypeInput"></a>

```typescript
public readonly ruleTypeInput: string;
```

- *Type:* string

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.scheduleInput"></a>

```typescript
public readonly scheduleInput: IResolvable | ComputeoptimizerAutomationRuleSchedule;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleSchedule">ComputeoptimizerAutomationRuleSchedule</a>

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | ComputeoptimizerAutomationRuleTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTags">ComputeoptimizerAutomationRuleTags</a>[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.priority"></a>

```typescript
public readonly priority: string;
```

- *Type:* string

---

##### `recommendedActionTypes`<sup>Required</sup> <a name="recommendedActionTypes" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.recommendedActionTypes"></a>

```typescript
public readonly recommendedActionTypes: string[];
```

- *Type:* string[]

---

##### `ruleType`<sup>Required</sup> <a name="ruleType" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.ruleType"></a>

```typescript
public readonly ruleType: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeoptimizerAutomationRuleConfig <a name="ComputeoptimizerAutomationRuleConfig" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.Initializer"></a>

```typescript
import { computeoptimizerAutomationRule } from '@cdktn/provider-awscc'

const computeoptimizerAutomationRuleConfig: computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.name">name</a></code> | <code>string</code> | The name of the automation rule. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.recommendedActionTypes">recommendedActionTypes</a></code> | <code>string[]</code> | The types of recommended actions this rule will implement. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.ruleType">ruleType</a></code> | <code>string</code> | The type of automation rule. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleSchedule">ComputeoptimizerAutomationRuleSchedule</a></code> | The schedule configuration for when the rule runs. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.status">status</a></code> | <code>string</code> | The status of the automation rule. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.criteria">criteria</a></code> | <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteria">ComputeoptimizerAutomationRuleCriteria</a></code> | Filter criteria that specify which recommended actions qualify for implementation. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.description">description</a></code> | <code>string</code> | The description of the automation rule. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.organizationConfiguration">organizationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfiguration">ComputeoptimizerAutomationRuleOrganizationConfiguration</a></code> | Organization configuration for organization rules, including rule apply order and account scope. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.priority">priority</a></code> | <code>string</code> | Rule priority within its group. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTags">ComputeoptimizerAutomationRuleTags</a>[]</code> | Tags associated with the automation rule. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the automation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#name ComputeoptimizerAutomationRule#name}

---

##### `recommendedActionTypes`<sup>Required</sup> <a name="recommendedActionTypes" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.recommendedActionTypes"></a>

```typescript
public readonly recommendedActionTypes: string[];
```

- *Type:* string[]

The types of recommended actions this rule will implement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#recommended_action_types ComputeoptimizerAutomationRule#recommended_action_types}

---

##### `ruleType`<sup>Required</sup> <a name="ruleType" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.ruleType"></a>

```typescript
public readonly ruleType: string;
```

- *Type:* string

The type of automation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#rule_type ComputeoptimizerAutomationRule#rule_type}

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.schedule"></a>

```typescript
public readonly schedule: ComputeoptimizerAutomationRuleSchedule;
```

- *Type:* <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleSchedule">ComputeoptimizerAutomationRuleSchedule</a>

The schedule configuration for when the rule runs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#schedule ComputeoptimizerAutomationRule#schedule}

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

The status of the automation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#status ComputeoptimizerAutomationRule#status}

---

##### `criteria`<sup>Optional</sup> <a name="criteria" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.criteria"></a>

```typescript
public readonly criteria: ComputeoptimizerAutomationRuleCriteria;
```

- *Type:* <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteria">ComputeoptimizerAutomationRuleCriteria</a>

Filter criteria that specify which recommended actions qualify for implementation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#criteria ComputeoptimizerAutomationRule#criteria}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the automation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#description ComputeoptimizerAutomationRule#description}

---

##### `organizationConfiguration`<sup>Optional</sup> <a name="organizationConfiguration" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.organizationConfiguration"></a>

```typescript
public readonly organizationConfiguration: ComputeoptimizerAutomationRuleOrganizationConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfiguration">ComputeoptimizerAutomationRuleOrganizationConfiguration</a>

Organization configuration for organization rules, including rule apply order and account scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#organization_configuration ComputeoptimizerAutomationRule#organization_configuration}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.priority"></a>

```typescript
public readonly priority: string;
```

- *Type:* string

Rule priority within its group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#priority ComputeoptimizerAutomationRule#priority}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | ComputeoptimizerAutomationRuleTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTags">ComputeoptimizerAutomationRuleTags</a>[]

Tags associated with the automation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#tags ComputeoptimizerAutomationRule#tags}

---

### ComputeoptimizerAutomationRuleCriteria <a name="ComputeoptimizerAutomationRuleCriteria" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteria.Initializer"></a>

```typescript
import { computeoptimizerAutomationRule } from '@cdktn/provider-awscc'

const computeoptimizerAutomationRuleCriteria: computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteria = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteria.property.ebsVolumeSizeInGib">ebsVolumeSizeInGib</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib">ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#ebs_volume_size_in_gib ComputeoptimizerAutomationRule#ebs_volume_size_in_gib}. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteria.property.ebsVolumeType">ebsVolumeType</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeType">ComputeoptimizerAutomationRuleCriteriaEbsVolumeType</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#ebs_volume_type ComputeoptimizerAutomationRule#ebs_volume_type}. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteria.property.estimatedMonthlySavings">estimatedMonthlySavings</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings">ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#estimated_monthly_savings ComputeoptimizerAutomationRule#estimated_monthly_savings}. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteria.property.lookBackPeriodInDays">lookBackPeriodInDays</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays">ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#look_back_period_in_days ComputeoptimizerAutomationRule#look_back_period_in_days}. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteria.property.region">region</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegion">ComputeoptimizerAutomationRuleCriteriaRegion</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#region ComputeoptimizerAutomationRule#region}. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteria.property.resourceArn">resourceArn</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArn">ComputeoptimizerAutomationRuleCriteriaResourceArn</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#resource_arn ComputeoptimizerAutomationRule#resource_arn}. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteria.property.resourceTag">resourceTag</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTag">ComputeoptimizerAutomationRuleCriteriaResourceTag</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#resource_tag ComputeoptimizerAutomationRule#resource_tag}. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteria.property.restartNeeded">restartNeeded</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeeded">ComputeoptimizerAutomationRuleCriteriaRestartNeeded</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#restart_needed ComputeoptimizerAutomationRule#restart_needed}. |

---

##### `ebsVolumeSizeInGib`<sup>Optional</sup> <a name="ebsVolumeSizeInGib" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteria.property.ebsVolumeSizeInGib"></a>

```typescript
public readonly ebsVolumeSizeInGib: IResolvable | ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib">ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#ebs_volume_size_in_gib ComputeoptimizerAutomationRule#ebs_volume_size_in_gib}.

---

##### `ebsVolumeType`<sup>Optional</sup> <a name="ebsVolumeType" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteria.property.ebsVolumeType"></a>

```typescript
public readonly ebsVolumeType: IResolvable | ComputeoptimizerAutomationRuleCriteriaEbsVolumeType[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeType">ComputeoptimizerAutomationRuleCriteriaEbsVolumeType</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#ebs_volume_type ComputeoptimizerAutomationRule#ebs_volume_type}.

---

##### `estimatedMonthlySavings`<sup>Optional</sup> <a name="estimatedMonthlySavings" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteria.property.estimatedMonthlySavings"></a>

```typescript
public readonly estimatedMonthlySavings: IResolvable | ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings">ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#estimated_monthly_savings ComputeoptimizerAutomationRule#estimated_monthly_savings}.

---

##### `lookBackPeriodInDays`<sup>Optional</sup> <a name="lookBackPeriodInDays" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteria.property.lookBackPeriodInDays"></a>

```typescript
public readonly lookBackPeriodInDays: IResolvable | ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays">ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#look_back_period_in_days ComputeoptimizerAutomationRule#look_back_period_in_days}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteria.property.region"></a>

```typescript
public readonly region: IResolvable | ComputeoptimizerAutomationRuleCriteriaRegion[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegion">ComputeoptimizerAutomationRuleCriteriaRegion</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#region ComputeoptimizerAutomationRule#region}.

---

##### `resourceArn`<sup>Optional</sup> <a name="resourceArn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteria.property.resourceArn"></a>

```typescript
public readonly resourceArn: IResolvable | ComputeoptimizerAutomationRuleCriteriaResourceArn[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArn">ComputeoptimizerAutomationRuleCriteriaResourceArn</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#resource_arn ComputeoptimizerAutomationRule#resource_arn}.

---

##### `resourceTag`<sup>Optional</sup> <a name="resourceTag" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteria.property.resourceTag"></a>

```typescript
public readonly resourceTag: IResolvable | ComputeoptimizerAutomationRuleCriteriaResourceTag[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTag">ComputeoptimizerAutomationRuleCriteriaResourceTag</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#resource_tag ComputeoptimizerAutomationRule#resource_tag}.

---

##### `restartNeeded`<sup>Optional</sup> <a name="restartNeeded" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteria.property.restartNeeded"></a>

```typescript
public readonly restartNeeded: IResolvable | ComputeoptimizerAutomationRuleCriteriaRestartNeeded[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeeded">ComputeoptimizerAutomationRuleCriteriaRestartNeeded</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#restart_needed ComputeoptimizerAutomationRule#restart_needed}.

---

### ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib <a name="ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib.Initializer"></a>

```typescript
import { computeoptimizerAutomationRule } from '@cdktn/provider-awscc'

const computeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib: computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib.property.comparison">comparison</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#comparison ComputeoptimizerAutomationRule#comparison}. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib.property.values">values</a></code> | <code>number[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#values ComputeoptimizerAutomationRule#values}. |

---

##### `comparison`<sup>Optional</sup> <a name="comparison" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib.property.comparison"></a>

```typescript
public readonly comparison: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#comparison ComputeoptimizerAutomationRule#comparison}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib.property.values"></a>

```typescript
public readonly values: number[];
```

- *Type:* number[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#values ComputeoptimizerAutomationRule#values}.

---

### ComputeoptimizerAutomationRuleCriteriaEbsVolumeType <a name="ComputeoptimizerAutomationRuleCriteriaEbsVolumeType" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeType"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeType.Initializer"></a>

```typescript
import { computeoptimizerAutomationRule } from '@cdktn/provider-awscc'

const computeoptimizerAutomationRuleCriteriaEbsVolumeType: computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeType = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeType.property.comparison">comparison</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#comparison ComputeoptimizerAutomationRule#comparison}. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeType.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#values ComputeoptimizerAutomationRule#values}. |

---

##### `comparison`<sup>Optional</sup> <a name="comparison" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeType.property.comparison"></a>

```typescript
public readonly comparison: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#comparison ComputeoptimizerAutomationRule#comparison}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeType.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#values ComputeoptimizerAutomationRule#values}.

---

### ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings <a name="ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings.Initializer"></a>

```typescript
import { computeoptimizerAutomationRule } from '@cdktn/provider-awscc'

const computeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings: computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings.property.comparison">comparison</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#comparison ComputeoptimizerAutomationRule#comparison}. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings.property.values">values</a></code> | <code>number[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#values ComputeoptimizerAutomationRule#values}. |

---

##### `comparison`<sup>Optional</sup> <a name="comparison" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings.property.comparison"></a>

```typescript
public readonly comparison: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#comparison ComputeoptimizerAutomationRule#comparison}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings.property.values"></a>

```typescript
public readonly values: number[];
```

- *Type:* number[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#values ComputeoptimizerAutomationRule#values}.

---

### ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays <a name="ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays.Initializer"></a>

```typescript
import { computeoptimizerAutomationRule } from '@cdktn/provider-awscc'

const computeoptimizerAutomationRuleCriteriaLookBackPeriodInDays: computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays.property.comparison">comparison</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#comparison ComputeoptimizerAutomationRule#comparison}. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays.property.values">values</a></code> | <code>number[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#values ComputeoptimizerAutomationRule#values}. |

---

##### `comparison`<sup>Optional</sup> <a name="comparison" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays.property.comparison"></a>

```typescript
public readonly comparison: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#comparison ComputeoptimizerAutomationRule#comparison}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays.property.values"></a>

```typescript
public readonly values: number[];
```

- *Type:* number[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#values ComputeoptimizerAutomationRule#values}.

---

### ComputeoptimizerAutomationRuleCriteriaRegion <a name="ComputeoptimizerAutomationRuleCriteriaRegion" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegion.Initializer"></a>

```typescript
import { computeoptimizerAutomationRule } from '@cdktn/provider-awscc'

const computeoptimizerAutomationRuleCriteriaRegion: computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegion = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegion.property.comparison">comparison</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#comparison ComputeoptimizerAutomationRule#comparison}. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegion.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#values ComputeoptimizerAutomationRule#values}. |

---

##### `comparison`<sup>Optional</sup> <a name="comparison" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegion.property.comparison"></a>

```typescript
public readonly comparison: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#comparison ComputeoptimizerAutomationRule#comparison}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegion.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#values ComputeoptimizerAutomationRule#values}.

---

### ComputeoptimizerAutomationRuleCriteriaResourceArn <a name="ComputeoptimizerAutomationRuleCriteriaResourceArn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArn.Initializer"></a>

```typescript
import { computeoptimizerAutomationRule } from '@cdktn/provider-awscc'

const computeoptimizerAutomationRuleCriteriaResourceArn: computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArn = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArn.property.comparison">comparison</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#comparison ComputeoptimizerAutomationRule#comparison}. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArn.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#values ComputeoptimizerAutomationRule#values}. |

---

##### `comparison`<sup>Optional</sup> <a name="comparison" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArn.property.comparison"></a>

```typescript
public readonly comparison: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#comparison ComputeoptimizerAutomationRule#comparison}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArn.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#values ComputeoptimizerAutomationRule#values}.

---

### ComputeoptimizerAutomationRuleCriteriaResourceTag <a name="ComputeoptimizerAutomationRuleCriteriaResourceTag" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTag"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTag.Initializer"></a>

```typescript
import { computeoptimizerAutomationRule } from '@cdktn/provider-awscc'

const computeoptimizerAutomationRuleCriteriaResourceTag: computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTag = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTag.property.comparison">comparison</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#comparison ComputeoptimizerAutomationRule#comparison}. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTag.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#key ComputeoptimizerAutomationRule#key}. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTag.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#values ComputeoptimizerAutomationRule#values}. |

---

##### `comparison`<sup>Optional</sup> <a name="comparison" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTag.property.comparison"></a>

```typescript
public readonly comparison: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#comparison ComputeoptimizerAutomationRule#comparison}.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTag.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#key ComputeoptimizerAutomationRule#key}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTag.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#values ComputeoptimizerAutomationRule#values}.

---

### ComputeoptimizerAutomationRuleCriteriaRestartNeeded <a name="ComputeoptimizerAutomationRuleCriteriaRestartNeeded" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeeded"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeeded.Initializer"></a>

```typescript
import { computeoptimizerAutomationRule } from '@cdktn/provider-awscc'

const computeoptimizerAutomationRuleCriteriaRestartNeeded: computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeeded = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeeded.property.comparison">comparison</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#comparison ComputeoptimizerAutomationRule#comparison}. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeeded.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#values ComputeoptimizerAutomationRule#values}. |

---

##### `comparison`<sup>Optional</sup> <a name="comparison" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeeded.property.comparison"></a>

```typescript
public readonly comparison: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#comparison ComputeoptimizerAutomationRule#comparison}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeeded.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#values ComputeoptimizerAutomationRule#values}.

---

### ComputeoptimizerAutomationRuleOrganizationConfiguration <a name="ComputeoptimizerAutomationRuleOrganizationConfiguration" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfiguration.Initializer"></a>

```typescript
import { computeoptimizerAutomationRule } from '@cdktn/provider-awscc'

const computeoptimizerAutomationRuleOrganizationConfiguration: computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfiguration.property.accountIds">accountIds</a></code> | <code>string[]</code> | List of account IDs where the organization rule applies. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfiguration.property.ruleApplyOrder">ruleApplyOrder</a></code> | <code>string</code> | When the rule should be applied relative to account rules. |

---

##### `accountIds`<sup>Optional</sup> <a name="accountIds" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfiguration.property.accountIds"></a>

```typescript
public readonly accountIds: string[];
```

- *Type:* string[]

List of account IDs where the organization rule applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#account_ids ComputeoptimizerAutomationRule#account_ids}

---

##### `ruleApplyOrder`<sup>Optional</sup> <a name="ruleApplyOrder" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfiguration.property.ruleApplyOrder"></a>

```typescript
public readonly ruleApplyOrder: string;
```

- *Type:* string

When the rule should be applied relative to account rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#rule_apply_order ComputeoptimizerAutomationRule#rule_apply_order}

---

### ComputeoptimizerAutomationRuleSchedule <a name="ComputeoptimizerAutomationRuleSchedule" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleSchedule.Initializer"></a>

```typescript
import { computeoptimizerAutomationRule } from '@cdktn/provider-awscc'

const computeoptimizerAutomationRuleSchedule: computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleSchedule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleSchedule.property.executionWindowInMinutes">executionWindowInMinutes</a></code> | <code>number</code> | Execution window duration in minutes. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleSchedule.property.scheduleExpression">scheduleExpression</a></code> | <code>string</code> | Schedule expression (e.g., cron or rate expression). |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleSchedule.property.scheduleExpressionTimezone">scheduleExpressionTimezone</a></code> | <code>string</code> | IANA timezone identifier. |

---

##### `executionWindowInMinutes`<sup>Optional</sup> <a name="executionWindowInMinutes" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleSchedule.property.executionWindowInMinutes"></a>

```typescript
public readonly executionWindowInMinutes: number;
```

- *Type:* number

Execution window duration in minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#execution_window_in_minutes ComputeoptimizerAutomationRule#execution_window_in_minutes}

---

##### `scheduleExpression`<sup>Optional</sup> <a name="scheduleExpression" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleSchedule.property.scheduleExpression"></a>

```typescript
public readonly scheduleExpression: string;
```

- *Type:* string

Schedule expression (e.g., cron or rate expression).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#schedule_expression ComputeoptimizerAutomationRule#schedule_expression}

---

##### `scheduleExpressionTimezone`<sup>Optional</sup> <a name="scheduleExpressionTimezone" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleSchedule.property.scheduleExpressionTimezone"></a>

```typescript
public readonly scheduleExpressionTimezone: string;
```

- *Type:* string

IANA timezone identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#schedule_expression_timezone ComputeoptimizerAutomationRule#schedule_expression_timezone}

---

### ComputeoptimizerAutomationRuleTags <a name="ComputeoptimizerAutomationRuleTags" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTags.Initializer"></a>

```typescript
import { computeoptimizerAutomationRule } from '@cdktn/provider-awscc'

const computeoptimizerAutomationRuleTags: computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#key ComputeoptimizerAutomationRule#key}. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#value ComputeoptimizerAutomationRule#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#key ComputeoptimizerAutomationRule#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#value ComputeoptimizerAutomationRule#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList <a name="ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.Initializer"></a>

```typescript
import { computeoptimizerAutomationRule } from '@cdktn/provider-awscc'

new computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.get"></a>

```typescript
public get(index: number): ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib">ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib">ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib</a>[]

---


### ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference <a name="ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.Initializer"></a>

```typescript
import { computeoptimizerAutomationRule } from '@cdktn/provider-awscc'

new computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.resetComparison">resetComparison</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetComparison` <a name="resetComparison" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.resetComparison"></a>

```typescript
public resetComparison(): void
```

##### `resetValues` <a name="resetValues" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.property.comparisonInput">comparisonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.property.valuesInput">valuesInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.property.comparison">comparison</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.property.values">values</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib">ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `comparisonInput`<sup>Optional</sup> <a name="comparisonInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.property.comparisonInput"></a>

```typescript
public readonly comparisonInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: number[];
```

- *Type:* number[]

---

##### `comparison`<sup>Required</sup> <a name="comparison" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.property.comparison"></a>

```typescript
public readonly comparison: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.property.values"></a>

```typescript
public readonly values: number[];
```

- *Type:* number[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib">ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib</a>

---


### ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList <a name="ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.Initializer"></a>

```typescript
import { computeoptimizerAutomationRule } from '@cdktn/provider-awscc'

new computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.get"></a>

```typescript
public get(index: number): ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeType">ComputeoptimizerAutomationRuleCriteriaEbsVolumeType</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeoptimizerAutomationRuleCriteriaEbsVolumeType[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeType">ComputeoptimizerAutomationRuleCriteriaEbsVolumeType</a>[]

---


### ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference <a name="ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.Initializer"></a>

```typescript
import { computeoptimizerAutomationRule } from '@cdktn/provider-awscc'

new computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.resetComparison">resetComparison</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetComparison` <a name="resetComparison" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.resetComparison"></a>

```typescript
public resetComparison(): void
```

##### `resetValues` <a name="resetValues" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.property.comparisonInput">comparisonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.property.comparison">comparison</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeType">ComputeoptimizerAutomationRuleCriteriaEbsVolumeType</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `comparisonInput`<sup>Optional</sup> <a name="comparisonInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.property.comparisonInput"></a>

```typescript
public readonly comparisonInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `comparison`<sup>Required</sup> <a name="comparison" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.property.comparison"></a>

```typescript
public readonly comparison: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeoptimizerAutomationRuleCriteriaEbsVolumeType;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeType">ComputeoptimizerAutomationRuleCriteriaEbsVolumeType</a>

---


### ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList <a name="ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.Initializer"></a>

```typescript
import { computeoptimizerAutomationRule } from '@cdktn/provider-awscc'

new computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.get"></a>

```typescript
public get(index: number): ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings">ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings">ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings</a>[]

---


### ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference <a name="ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.Initializer"></a>

```typescript
import { computeoptimizerAutomationRule } from '@cdktn/provider-awscc'

new computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.resetComparison">resetComparison</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetComparison` <a name="resetComparison" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.resetComparison"></a>

```typescript
public resetComparison(): void
```

##### `resetValues` <a name="resetValues" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.property.comparisonInput">comparisonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.property.valuesInput">valuesInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.property.comparison">comparison</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.property.values">values</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings">ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `comparisonInput`<sup>Optional</sup> <a name="comparisonInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.property.comparisonInput"></a>

```typescript
public readonly comparisonInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: number[];
```

- *Type:* number[]

---

##### `comparison`<sup>Required</sup> <a name="comparison" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.property.comparison"></a>

```typescript
public readonly comparison: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.property.values"></a>

```typescript
public readonly values: number[];
```

- *Type:* number[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings">ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings</a>

---


### ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList <a name="ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.Initializer"></a>

```typescript
import { computeoptimizerAutomationRule } from '@cdktn/provider-awscc'

new computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.get"></a>

```typescript
public get(index: number): ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays">ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays">ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays</a>[]

---


### ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference <a name="ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.Initializer"></a>

```typescript
import { computeoptimizerAutomationRule } from '@cdktn/provider-awscc'

new computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.resetComparison">resetComparison</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetComparison` <a name="resetComparison" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.resetComparison"></a>

```typescript
public resetComparison(): void
```

##### `resetValues` <a name="resetValues" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.property.comparisonInput">comparisonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.property.valuesInput">valuesInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.property.comparison">comparison</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.property.values">values</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays">ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `comparisonInput`<sup>Optional</sup> <a name="comparisonInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.property.comparisonInput"></a>

```typescript
public readonly comparisonInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: number[];
```

- *Type:* number[]

---

##### `comparison`<sup>Required</sup> <a name="comparison" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.property.comparison"></a>

```typescript
public readonly comparison: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.property.values"></a>

```typescript
public readonly values: number[];
```

- *Type:* number[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays">ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays</a>

---


### ComputeoptimizerAutomationRuleCriteriaOutputReference <a name="ComputeoptimizerAutomationRuleCriteriaOutputReference" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.Initializer"></a>

```typescript
import { computeoptimizerAutomationRule } from '@cdktn/provider-awscc'

new computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.putEbsVolumeSizeInGib">putEbsVolumeSizeInGib</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.putEbsVolumeType">putEbsVolumeType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.putEstimatedMonthlySavings">putEstimatedMonthlySavings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.putLookBackPeriodInDays">putLookBackPeriodInDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.putRegion">putRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.putResourceArn">putResourceArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.putResourceTag">putResourceTag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.putRestartNeeded">putRestartNeeded</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.resetEbsVolumeSizeInGib">resetEbsVolumeSizeInGib</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.resetEbsVolumeType">resetEbsVolumeType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.resetEstimatedMonthlySavings">resetEstimatedMonthlySavings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.resetLookBackPeriodInDays">resetLookBackPeriodInDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.resetResourceArn">resetResourceArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.resetResourceTag">resetResourceTag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.resetRestartNeeded">resetRestartNeeded</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEbsVolumeSizeInGib` <a name="putEbsVolumeSizeInGib" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.putEbsVolumeSizeInGib"></a>

```typescript
public putEbsVolumeSizeInGib(value: IResolvable | ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.putEbsVolumeSizeInGib.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib">ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib</a>[]

---

##### `putEbsVolumeType` <a name="putEbsVolumeType" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.putEbsVolumeType"></a>

```typescript
public putEbsVolumeType(value: IResolvable | ComputeoptimizerAutomationRuleCriteriaEbsVolumeType[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.putEbsVolumeType.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeType">ComputeoptimizerAutomationRuleCriteriaEbsVolumeType</a>[]

---

##### `putEstimatedMonthlySavings` <a name="putEstimatedMonthlySavings" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.putEstimatedMonthlySavings"></a>

```typescript
public putEstimatedMonthlySavings(value: IResolvable | ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.putEstimatedMonthlySavings.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings">ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings</a>[]

---

##### `putLookBackPeriodInDays` <a name="putLookBackPeriodInDays" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.putLookBackPeriodInDays"></a>

```typescript
public putLookBackPeriodInDays(value: IResolvable | ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.putLookBackPeriodInDays.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays">ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays</a>[]

---

##### `putRegion` <a name="putRegion" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.putRegion"></a>

```typescript
public putRegion(value: IResolvable | ComputeoptimizerAutomationRuleCriteriaRegion[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.putRegion.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegion">ComputeoptimizerAutomationRuleCriteriaRegion</a>[]

---

##### `putResourceArn` <a name="putResourceArn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.putResourceArn"></a>

```typescript
public putResourceArn(value: IResolvable | ComputeoptimizerAutomationRuleCriteriaResourceArn[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.putResourceArn.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArn">ComputeoptimizerAutomationRuleCriteriaResourceArn</a>[]

---

##### `putResourceTag` <a name="putResourceTag" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.putResourceTag"></a>

```typescript
public putResourceTag(value: IResolvable | ComputeoptimizerAutomationRuleCriteriaResourceTag[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.putResourceTag.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTag">ComputeoptimizerAutomationRuleCriteriaResourceTag</a>[]

---

##### `putRestartNeeded` <a name="putRestartNeeded" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.putRestartNeeded"></a>

```typescript
public putRestartNeeded(value: IResolvable | ComputeoptimizerAutomationRuleCriteriaRestartNeeded[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.putRestartNeeded.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeeded">ComputeoptimizerAutomationRuleCriteriaRestartNeeded</a>[]

---

##### `resetEbsVolumeSizeInGib` <a name="resetEbsVolumeSizeInGib" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.resetEbsVolumeSizeInGib"></a>

```typescript
public resetEbsVolumeSizeInGib(): void
```

##### `resetEbsVolumeType` <a name="resetEbsVolumeType" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.resetEbsVolumeType"></a>

```typescript
public resetEbsVolumeType(): void
```

##### `resetEstimatedMonthlySavings` <a name="resetEstimatedMonthlySavings" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.resetEstimatedMonthlySavings"></a>

```typescript
public resetEstimatedMonthlySavings(): void
```

##### `resetLookBackPeriodInDays` <a name="resetLookBackPeriodInDays" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.resetLookBackPeriodInDays"></a>

```typescript
public resetLookBackPeriodInDays(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetResourceArn` <a name="resetResourceArn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.resetResourceArn"></a>

```typescript
public resetResourceArn(): void
```

##### `resetResourceTag` <a name="resetResourceTag" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.resetResourceTag"></a>

```typescript
public resetResourceTag(): void
```

##### `resetRestartNeeded` <a name="resetRestartNeeded" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.resetRestartNeeded"></a>

```typescript
public resetRestartNeeded(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.ebsVolumeSizeInGib">ebsVolumeSizeInGib</a></code> | <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList">ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.ebsVolumeType">ebsVolumeType</a></code> | <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList">ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.estimatedMonthlySavings">estimatedMonthlySavings</a></code> | <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList">ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.lookBackPeriodInDays">lookBackPeriodInDays</a></code> | <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList">ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.region">region</a></code> | <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionList">ComputeoptimizerAutomationRuleCriteriaRegionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.resourceArn">resourceArn</a></code> | <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnList">ComputeoptimizerAutomationRuleCriteriaResourceArnList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.resourceTag">resourceTag</a></code> | <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagList">ComputeoptimizerAutomationRuleCriteriaResourceTagList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.restartNeeded">restartNeeded</a></code> | <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededList">ComputeoptimizerAutomationRuleCriteriaRestartNeededList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.ebsVolumeSizeInGibInput">ebsVolumeSizeInGibInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib">ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.ebsVolumeTypeInput">ebsVolumeTypeInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeType">ComputeoptimizerAutomationRuleCriteriaEbsVolumeType</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.estimatedMonthlySavingsInput">estimatedMonthlySavingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings">ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.lookBackPeriodInDaysInput">lookBackPeriodInDaysInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays">ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.regionInput">regionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegion">ComputeoptimizerAutomationRuleCriteriaRegion</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.resourceArnInput">resourceArnInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArn">ComputeoptimizerAutomationRuleCriteriaResourceArn</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.resourceTagInput">resourceTagInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTag">ComputeoptimizerAutomationRuleCriteriaResourceTag</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.restartNeededInput">restartNeededInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeeded">ComputeoptimizerAutomationRuleCriteriaRestartNeeded</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteria">ComputeoptimizerAutomationRuleCriteria</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ebsVolumeSizeInGib`<sup>Required</sup> <a name="ebsVolumeSizeInGib" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.ebsVolumeSizeInGib"></a>

```typescript
public readonly ebsVolumeSizeInGib: ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList;
```

- *Type:* <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList">ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList</a>

---

##### `ebsVolumeType`<sup>Required</sup> <a name="ebsVolumeType" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.ebsVolumeType"></a>

```typescript
public readonly ebsVolumeType: ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList;
```

- *Type:* <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList">ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList</a>

---

##### `estimatedMonthlySavings`<sup>Required</sup> <a name="estimatedMonthlySavings" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.estimatedMonthlySavings"></a>

```typescript
public readonly estimatedMonthlySavings: ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList">ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList</a>

---

##### `lookBackPeriodInDays`<sup>Required</sup> <a name="lookBackPeriodInDays" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.lookBackPeriodInDays"></a>

```typescript
public readonly lookBackPeriodInDays: ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList;
```

- *Type:* <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList">ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList</a>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.region"></a>

```typescript
public readonly region: ComputeoptimizerAutomationRuleCriteriaRegionList;
```

- *Type:* <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionList">ComputeoptimizerAutomationRuleCriteriaRegionList</a>

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.resourceArn"></a>

```typescript
public readonly resourceArn: ComputeoptimizerAutomationRuleCriteriaResourceArnList;
```

- *Type:* <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnList">ComputeoptimizerAutomationRuleCriteriaResourceArnList</a>

---

##### `resourceTag`<sup>Required</sup> <a name="resourceTag" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.resourceTag"></a>

```typescript
public readonly resourceTag: ComputeoptimizerAutomationRuleCriteriaResourceTagList;
```

- *Type:* <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagList">ComputeoptimizerAutomationRuleCriteriaResourceTagList</a>

---

##### `restartNeeded`<sup>Required</sup> <a name="restartNeeded" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.restartNeeded"></a>

```typescript
public readonly restartNeeded: ComputeoptimizerAutomationRuleCriteriaRestartNeededList;
```

- *Type:* <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededList">ComputeoptimizerAutomationRuleCriteriaRestartNeededList</a>

---

##### `ebsVolumeSizeInGibInput`<sup>Optional</sup> <a name="ebsVolumeSizeInGibInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.ebsVolumeSizeInGibInput"></a>

```typescript
public readonly ebsVolumeSizeInGibInput: IResolvable | ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib">ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib</a>[]

---

##### `ebsVolumeTypeInput`<sup>Optional</sup> <a name="ebsVolumeTypeInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.ebsVolumeTypeInput"></a>

```typescript
public readonly ebsVolumeTypeInput: IResolvable | ComputeoptimizerAutomationRuleCriteriaEbsVolumeType[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeType">ComputeoptimizerAutomationRuleCriteriaEbsVolumeType</a>[]

---

##### `estimatedMonthlySavingsInput`<sup>Optional</sup> <a name="estimatedMonthlySavingsInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.estimatedMonthlySavingsInput"></a>

```typescript
public readonly estimatedMonthlySavingsInput: IResolvable | ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings">ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings</a>[]

---

##### `lookBackPeriodInDaysInput`<sup>Optional</sup> <a name="lookBackPeriodInDaysInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.lookBackPeriodInDaysInput"></a>

```typescript
public readonly lookBackPeriodInDaysInput: IResolvable | ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays">ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays</a>[]

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.regionInput"></a>

```typescript
public readonly regionInput: IResolvable | ComputeoptimizerAutomationRuleCriteriaRegion[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegion">ComputeoptimizerAutomationRuleCriteriaRegion</a>[]

---

##### `resourceArnInput`<sup>Optional</sup> <a name="resourceArnInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.resourceArnInput"></a>

```typescript
public readonly resourceArnInput: IResolvable | ComputeoptimizerAutomationRuleCriteriaResourceArn[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArn">ComputeoptimizerAutomationRuleCriteriaResourceArn</a>[]

---

##### `resourceTagInput`<sup>Optional</sup> <a name="resourceTagInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.resourceTagInput"></a>

```typescript
public readonly resourceTagInput: IResolvable | ComputeoptimizerAutomationRuleCriteriaResourceTag[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTag">ComputeoptimizerAutomationRuleCriteriaResourceTag</a>[]

---

##### `restartNeededInput`<sup>Optional</sup> <a name="restartNeededInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.restartNeededInput"></a>

```typescript
public readonly restartNeededInput: IResolvable | ComputeoptimizerAutomationRuleCriteriaRestartNeeded[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeeded">ComputeoptimizerAutomationRuleCriteriaRestartNeeded</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeoptimizerAutomationRuleCriteria;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteria">ComputeoptimizerAutomationRuleCriteria</a>

---


### ComputeoptimizerAutomationRuleCriteriaRegionList <a name="ComputeoptimizerAutomationRuleCriteriaRegionList" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionList.Initializer"></a>

```typescript
import { computeoptimizerAutomationRule } from '@cdktn/provider-awscc'

new computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionList.get"></a>

```typescript
public get(index: number): ComputeoptimizerAutomationRuleCriteriaRegionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegion">ComputeoptimizerAutomationRuleCriteriaRegion</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeoptimizerAutomationRuleCriteriaRegion[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegion">ComputeoptimizerAutomationRuleCriteriaRegion</a>[]

---


### ComputeoptimizerAutomationRuleCriteriaRegionOutputReference <a name="ComputeoptimizerAutomationRuleCriteriaRegionOutputReference" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.Initializer"></a>

```typescript
import { computeoptimizerAutomationRule } from '@cdktn/provider-awscc'

new computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.resetComparison">resetComparison</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetComparison` <a name="resetComparison" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.resetComparison"></a>

```typescript
public resetComparison(): void
```

##### `resetValues` <a name="resetValues" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.property.comparisonInput">comparisonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.property.comparison">comparison</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegion">ComputeoptimizerAutomationRuleCriteriaRegion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `comparisonInput`<sup>Optional</sup> <a name="comparisonInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.property.comparisonInput"></a>

```typescript
public readonly comparisonInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `comparison`<sup>Required</sup> <a name="comparison" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.property.comparison"></a>

```typescript
public readonly comparison: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeoptimizerAutomationRuleCriteriaRegion;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegion">ComputeoptimizerAutomationRuleCriteriaRegion</a>

---


### ComputeoptimizerAutomationRuleCriteriaResourceArnList <a name="ComputeoptimizerAutomationRuleCriteriaResourceArnList" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnList.Initializer"></a>

```typescript
import { computeoptimizerAutomationRule } from '@cdktn/provider-awscc'

new computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnList.get"></a>

```typescript
public get(index: number): ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArn">ComputeoptimizerAutomationRuleCriteriaResourceArn</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeoptimizerAutomationRuleCriteriaResourceArn[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArn">ComputeoptimizerAutomationRuleCriteriaResourceArn</a>[]

---


### ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference <a name="ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.Initializer"></a>

```typescript
import { computeoptimizerAutomationRule } from '@cdktn/provider-awscc'

new computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.resetComparison">resetComparison</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetComparison` <a name="resetComparison" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.resetComparison"></a>

```typescript
public resetComparison(): void
```

##### `resetValues` <a name="resetValues" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.property.comparisonInput">comparisonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.property.comparison">comparison</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArn">ComputeoptimizerAutomationRuleCriteriaResourceArn</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `comparisonInput`<sup>Optional</sup> <a name="comparisonInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.property.comparisonInput"></a>

```typescript
public readonly comparisonInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `comparison`<sup>Required</sup> <a name="comparison" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.property.comparison"></a>

```typescript
public readonly comparison: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeoptimizerAutomationRuleCriteriaResourceArn;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArn">ComputeoptimizerAutomationRuleCriteriaResourceArn</a>

---


### ComputeoptimizerAutomationRuleCriteriaResourceTagList <a name="ComputeoptimizerAutomationRuleCriteriaResourceTagList" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagList.Initializer"></a>

```typescript
import { computeoptimizerAutomationRule } from '@cdktn/provider-awscc'

new computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagList.get"></a>

```typescript
public get(index: number): ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTag">ComputeoptimizerAutomationRuleCriteriaResourceTag</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeoptimizerAutomationRuleCriteriaResourceTag[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTag">ComputeoptimizerAutomationRuleCriteriaResourceTag</a>[]

---


### ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference <a name="ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.Initializer"></a>

```typescript
import { computeoptimizerAutomationRule } from '@cdktn/provider-awscc'

new computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.resetComparison">resetComparison</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetComparison` <a name="resetComparison" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.resetComparison"></a>

```typescript
public resetComparison(): void
```

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValues` <a name="resetValues" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.property.comparisonInput">comparisonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.property.comparison">comparison</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTag">ComputeoptimizerAutomationRuleCriteriaResourceTag</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `comparisonInput`<sup>Optional</sup> <a name="comparisonInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.property.comparisonInput"></a>

```typescript
public readonly comparisonInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `comparison`<sup>Required</sup> <a name="comparison" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.property.comparison"></a>

```typescript
public readonly comparison: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeoptimizerAutomationRuleCriteriaResourceTag;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTag">ComputeoptimizerAutomationRuleCriteriaResourceTag</a>

---


### ComputeoptimizerAutomationRuleCriteriaRestartNeededList <a name="ComputeoptimizerAutomationRuleCriteriaRestartNeededList" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededList.Initializer"></a>

```typescript
import { computeoptimizerAutomationRule } from '@cdktn/provider-awscc'

new computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededList.get"></a>

```typescript
public get(index: number): ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeeded">ComputeoptimizerAutomationRuleCriteriaRestartNeeded</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeoptimizerAutomationRuleCriteriaRestartNeeded[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeeded">ComputeoptimizerAutomationRuleCriteriaRestartNeeded</a>[]

---


### ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference <a name="ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.Initializer"></a>

```typescript
import { computeoptimizerAutomationRule } from '@cdktn/provider-awscc'

new computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.resetComparison">resetComparison</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetComparison` <a name="resetComparison" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.resetComparison"></a>

```typescript
public resetComparison(): void
```

##### `resetValues` <a name="resetValues" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.property.comparisonInput">comparisonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.property.comparison">comparison</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeeded">ComputeoptimizerAutomationRuleCriteriaRestartNeeded</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `comparisonInput`<sup>Optional</sup> <a name="comparisonInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.property.comparisonInput"></a>

```typescript
public readonly comparisonInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `comparison`<sup>Required</sup> <a name="comparison" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.property.comparison"></a>

```typescript
public readonly comparison: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeoptimizerAutomationRuleCriteriaRestartNeeded;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeeded">ComputeoptimizerAutomationRuleCriteriaRestartNeeded</a>

---


### ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference <a name="ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.Initializer"></a>

```typescript
import { computeoptimizerAutomationRule } from '@cdktn/provider-awscc'

new computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.resetAccountIds">resetAccountIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.resetRuleApplyOrder">resetRuleApplyOrder</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccountIds` <a name="resetAccountIds" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.resetAccountIds"></a>

```typescript
public resetAccountIds(): void
```

##### `resetRuleApplyOrder` <a name="resetRuleApplyOrder" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.resetRuleApplyOrder"></a>

```typescript
public resetRuleApplyOrder(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.property.accountIdsInput">accountIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.property.ruleApplyOrderInput">ruleApplyOrderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.property.accountIds">accountIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.property.ruleApplyOrder">ruleApplyOrder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfiguration">ComputeoptimizerAutomationRuleOrganizationConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accountIdsInput`<sup>Optional</sup> <a name="accountIdsInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.property.accountIdsInput"></a>

```typescript
public readonly accountIdsInput: string[];
```

- *Type:* string[]

---

##### `ruleApplyOrderInput`<sup>Optional</sup> <a name="ruleApplyOrderInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.property.ruleApplyOrderInput"></a>

```typescript
public readonly ruleApplyOrderInput: string;
```

- *Type:* string

---

##### `accountIds`<sup>Required</sup> <a name="accountIds" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.property.accountIds"></a>

```typescript
public readonly accountIds: string[];
```

- *Type:* string[]

---

##### `ruleApplyOrder`<sup>Required</sup> <a name="ruleApplyOrder" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.property.ruleApplyOrder"></a>

```typescript
public readonly ruleApplyOrder: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeoptimizerAutomationRuleOrganizationConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfiguration">ComputeoptimizerAutomationRuleOrganizationConfiguration</a>

---


### ComputeoptimizerAutomationRuleScheduleOutputReference <a name="ComputeoptimizerAutomationRuleScheduleOutputReference" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.Initializer"></a>

```typescript
import { computeoptimizerAutomationRule } from '@cdktn/provider-awscc'

new computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.resetExecutionWindowInMinutes">resetExecutionWindowInMinutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.resetScheduleExpression">resetScheduleExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.resetScheduleExpressionTimezone">resetScheduleExpressionTimezone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExecutionWindowInMinutes` <a name="resetExecutionWindowInMinutes" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.resetExecutionWindowInMinutes"></a>

```typescript
public resetExecutionWindowInMinutes(): void
```

##### `resetScheduleExpression` <a name="resetScheduleExpression" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.resetScheduleExpression"></a>

```typescript
public resetScheduleExpression(): void
```

##### `resetScheduleExpressionTimezone` <a name="resetScheduleExpressionTimezone" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.resetScheduleExpressionTimezone"></a>

```typescript
public resetScheduleExpressionTimezone(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.property.executionWindowInMinutesInput">executionWindowInMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.property.scheduleExpressionInput">scheduleExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.property.scheduleExpressionTimezoneInput">scheduleExpressionTimezoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.property.executionWindowInMinutes">executionWindowInMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.property.scheduleExpression">scheduleExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.property.scheduleExpressionTimezone">scheduleExpressionTimezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleSchedule">ComputeoptimizerAutomationRuleSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `executionWindowInMinutesInput`<sup>Optional</sup> <a name="executionWindowInMinutesInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.property.executionWindowInMinutesInput"></a>

```typescript
public readonly executionWindowInMinutesInput: number;
```

- *Type:* number

---

##### `scheduleExpressionInput`<sup>Optional</sup> <a name="scheduleExpressionInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.property.scheduleExpressionInput"></a>

```typescript
public readonly scheduleExpressionInput: string;
```

- *Type:* string

---

##### `scheduleExpressionTimezoneInput`<sup>Optional</sup> <a name="scheduleExpressionTimezoneInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.property.scheduleExpressionTimezoneInput"></a>

```typescript
public readonly scheduleExpressionTimezoneInput: string;
```

- *Type:* string

---

##### `executionWindowInMinutes`<sup>Required</sup> <a name="executionWindowInMinutes" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.property.executionWindowInMinutes"></a>

```typescript
public readonly executionWindowInMinutes: number;
```

- *Type:* number

---

##### `scheduleExpression`<sup>Required</sup> <a name="scheduleExpression" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.property.scheduleExpression"></a>

```typescript
public readonly scheduleExpression: string;
```

- *Type:* string

---

##### `scheduleExpressionTimezone`<sup>Required</sup> <a name="scheduleExpressionTimezone" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.property.scheduleExpressionTimezone"></a>

```typescript
public readonly scheduleExpressionTimezone: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeoptimizerAutomationRuleSchedule;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleSchedule">ComputeoptimizerAutomationRuleSchedule</a>

---


### ComputeoptimizerAutomationRuleTagsList <a name="ComputeoptimizerAutomationRuleTagsList" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsList.Initializer"></a>

```typescript
import { computeoptimizerAutomationRule } from '@cdktn/provider-awscc'

new computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsList.get"></a>

```typescript
public get(index: number): ComputeoptimizerAutomationRuleTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTags">ComputeoptimizerAutomationRuleTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeoptimizerAutomationRuleTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTags">ComputeoptimizerAutomationRuleTags</a>[]

---


### ComputeoptimizerAutomationRuleTagsOutputReference <a name="ComputeoptimizerAutomationRuleTagsOutputReference" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.Initializer"></a>

```typescript
import { computeoptimizerAutomationRule } from '@cdktn/provider-awscc'

new computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTags">ComputeoptimizerAutomationRuleTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeoptimizerAutomationRuleTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTags">ComputeoptimizerAutomationRuleTags</a>

---



