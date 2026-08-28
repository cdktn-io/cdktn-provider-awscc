# `observabilityadminOrganizationCentralizationRule` Submodule <a name="`observabilityadminOrganizationCentralizationRule` Submodule" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ObservabilityadminOrganizationCentralizationRule <a name="ObservabilityadminOrganizationCentralizationRule" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/observabilityadmin_organization_centralization_rule awscc_observabilityadmin_organization_centralization_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.Initializer"></a>

```typescript
import { observabilityadminOrganizationCentralizationRule } from '@cdktn/provider-awscc'

new observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule(scope: Construct, id: string, config: ObservabilityadminOrganizationCentralizationRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleConfig">ObservabilityadminOrganizationCentralizationRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleConfig">ObservabilityadminOrganizationCentralizationRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.putRule">putRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRule` <a name="putRule" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.putRule"></a>

```typescript
public putRule(value: ObservabilityadminOrganizationCentralizationRuleRule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.putRule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRule">ObservabilityadminOrganizationCentralizationRuleRule</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.putTags"></a>

```typescript
public putTags(value: IResolvable | ObservabilityadminOrganizationCentralizationRuleTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTags">ObservabilityadminOrganizationCentralizationRuleTags</a>[]

---

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ObservabilityadminOrganizationCentralizationRule resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.isConstruct"></a>

```typescript
import { observabilityadminOrganizationCentralizationRule } from '@cdktn/provider-awscc'

observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.isTerraformElement"></a>

```typescript
import { observabilityadminOrganizationCentralizationRule } from '@cdktn/provider-awscc'

observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.isTerraformResource"></a>

```typescript
import { observabilityadminOrganizationCentralizationRule } from '@cdktn/provider-awscc'

observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.generateConfigForImport"></a>

```typescript
import { observabilityadminOrganizationCentralizationRule } from '@cdktn/provider-awscc'

observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ObservabilityadminOrganizationCentralizationRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ObservabilityadminOrganizationCentralizationRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ObservabilityadminOrganizationCentralizationRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/observabilityadmin_organization_centralization_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ObservabilityadminOrganizationCentralizationRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.property.rule">rule</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference">ObservabilityadminOrganizationCentralizationRuleRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.property.ruleArn">ruleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsList">ObservabilityadminOrganizationCentralizationRuleTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.property.ruleInput">ruleInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRule">ObservabilityadminOrganizationCentralizationRuleRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.property.ruleNameInput">ruleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTags">ObservabilityadminOrganizationCentralizationRuleTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.property.ruleName">ruleName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.property.rule"></a>

```typescript
public readonly rule: ObservabilityadminOrganizationCentralizationRuleRuleOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference">ObservabilityadminOrganizationCentralizationRuleRuleOutputReference</a>

---

##### `ruleArn`<sup>Required</sup> <a name="ruleArn" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.property.ruleArn"></a>

```typescript
public readonly ruleArn: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.property.tags"></a>

```typescript
public readonly tags: ObservabilityadminOrganizationCentralizationRuleTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsList">ObservabilityadminOrganizationCentralizationRuleTagsList</a>

---

##### `ruleInput`<sup>Optional</sup> <a name="ruleInput" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.property.ruleInput"></a>

```typescript
public readonly ruleInput: IResolvable | ObservabilityadminOrganizationCentralizationRuleRule;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRule">ObservabilityadminOrganizationCentralizationRuleRule</a>

---

##### `ruleNameInput`<sup>Optional</sup> <a name="ruleNameInput" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.property.ruleNameInput"></a>

```typescript
public readonly ruleNameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | ObservabilityadminOrganizationCentralizationRuleTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTags">ObservabilityadminOrganizationCentralizationRuleTags</a>[]

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.property.ruleName"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ObservabilityadminOrganizationCentralizationRuleConfig <a name="ObservabilityadminOrganizationCentralizationRuleConfig" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleConfig.Initializer"></a>

```typescript
import { observabilityadminOrganizationCentralizationRule } from '@cdktn/provider-awscc'

const observabilityadminOrganizationCentralizationRuleConfig: observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleConfig.property.rule">rule</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRule">ObservabilityadminOrganizationCentralizationRuleRule</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/observabilityadmin_organization_centralization_rule#rule ObservabilityadminOrganizationCentralizationRule#rule}. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleConfig.property.ruleName">ruleName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/observabilityadmin_organization_centralization_rule#rule_name ObservabilityadminOrganizationCentralizationRule#rule_name}. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTags">ObservabilityadminOrganizationCentralizationRuleTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleConfig.property.rule"></a>

```typescript
public readonly rule: ObservabilityadminOrganizationCentralizationRuleRule;
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRule">ObservabilityadminOrganizationCentralizationRuleRule</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/observabilityadmin_organization_centralization_rule#rule ObservabilityadminOrganizationCentralizationRule#rule}.

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleConfig.property.ruleName"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/observabilityadmin_organization_centralization_rule#rule_name ObservabilityadminOrganizationCentralizationRule#rule_name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | ObservabilityadminOrganizationCentralizationRuleTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTags">ObservabilityadminOrganizationCentralizationRuleTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/observabilityadmin_organization_centralization_rule#tags ObservabilityadminOrganizationCentralizationRule#tags}

---

### ObservabilityadminOrganizationCentralizationRuleRule <a name="ObservabilityadminOrganizationCentralizationRuleRule" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRule.Initializer"></a>

```typescript
import { observabilityadminOrganizationCentralizationRule } from '@cdktn/provider-awscc'

const observabilityadminOrganizationCentralizationRuleRule: observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRule.property.destination">destination</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestination">ObservabilityadminOrganizationCentralizationRuleRuleDestination</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/observabilityadmin_organization_centralization_rule#destination ObservabilityadminOrganizationCentralizationRule#destination}. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRule.property.source">source</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSource">ObservabilityadminOrganizationCentralizationRuleRuleSource</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/observabilityadmin_organization_centralization_rule#source ObservabilityadminOrganizationCentralizationRule#source}. |

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRule.property.destination"></a>

```typescript
public readonly destination: ObservabilityadminOrganizationCentralizationRuleRuleDestination;
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestination">ObservabilityadminOrganizationCentralizationRuleRuleDestination</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/observabilityadmin_organization_centralization_rule#destination ObservabilityadminOrganizationCentralizationRule#destination}.

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRule.property.source"></a>

```typescript
public readonly source: ObservabilityadminOrganizationCentralizationRuleRuleSource;
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSource">ObservabilityadminOrganizationCentralizationRuleRuleSource</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/observabilityadmin_organization_centralization_rule#source ObservabilityadminOrganizationCentralizationRule#source}.

---

### ObservabilityadminOrganizationCentralizationRuleRuleDestination <a name="ObservabilityadminOrganizationCentralizationRuleRuleDestination" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestination.Initializer"></a>

```typescript
import { observabilityadminOrganizationCentralizationRule } from '@cdktn/provider-awscc'

const observabilityadminOrganizationCentralizationRuleRuleDestination: observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestination = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestination.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/observabilityadmin_organization_centralization_rule#region ObservabilityadminOrganizationCentralizationRule#region}. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestination.property.account">account</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/observabilityadmin_organization_centralization_rule#account ObservabilityadminOrganizationCentralizationRule#account}. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestination.property.destinationLogsConfiguration">destinationLogsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfiguration">ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/observabilityadmin_organization_centralization_rule#destination_logs_configuration ObservabilityadminOrganizationCentralizationRule#destination_logs_configuration}. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestination.property.destinationMetricsConfiguration">destinationMetricsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfiguration">ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/observabilityadmin_organization_centralization_rule#destination_metrics_configuration ObservabilityadminOrganizationCentralizationRule#destination_metrics_configuration}. |

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestination.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/observabilityadmin_organization_centralization_rule#region ObservabilityadminOrganizationCentralizationRule#region}.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestination.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/observabilityadmin_organization_centralization_rule#account ObservabilityadminOrganizationCentralizationRule#account}.

---

##### `destinationLogsConfiguration`<sup>Optional</sup> <a name="destinationLogsConfiguration" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestination.property.destinationLogsConfiguration"></a>

```typescript
public readonly destinationLogsConfiguration: ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfiguration">ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/observabilityadmin_organization_centralization_rule#destination_logs_configuration ObservabilityadminOrganizationCentralizationRule#destination_logs_configuration}.

---

##### `destinationMetricsConfiguration`<sup>Optional</sup> <a name="destinationMetricsConfiguration" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestination.property.destinationMetricsConfiguration"></a>

```typescript
public readonly destinationMetricsConfiguration: ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfiguration">ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/observabilityadmin_organization_centralization_rule#destination_metrics_configuration ObservabilityadminOrganizationCentralizationRule#destination_metrics_configuration}.

---

### ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfiguration <a name="ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfiguration" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfiguration.Initializer"></a>

```typescript
import { observabilityadminOrganizationCentralizationRule } from '@cdktn/provider-awscc'

const observabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfiguration: observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfiguration.property.backupConfiguration">backupConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfiguration">ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/observabilityadmin_organization_centralization_rule#backup_configuration ObservabilityadminOrganizationCentralizationRule#backup_configuration}. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfiguration.property.logGroupNameConfiguration">logGroupNameConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfiguration">ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/observabilityadmin_organization_centralization_rule#log_group_name_configuration ObservabilityadminOrganizationCentralizationRule#log_group_name_configuration}. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfiguration.property.logsEncryptionConfiguration">logsEncryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfiguration">ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/observabilityadmin_organization_centralization_rule#logs_encryption_configuration ObservabilityadminOrganizationCentralizationRule#logs_encryption_configuration}. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfiguration.property.tagPropagationConfiguration">tagPropagationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationTagPropagationConfiguration">ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationTagPropagationConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/observabilityadmin_organization_centralization_rule#tag_propagation_configuration ObservabilityadminOrganizationCentralizationRule#tag_propagation_configuration}. |

---

##### `backupConfiguration`<sup>Optional</sup> <a name="backupConfiguration" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfiguration.property.backupConfiguration"></a>

```typescript
public readonly backupConfiguration: ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfiguration">ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/observabilityadmin_organization_centralization_rule#backup_configuration ObservabilityadminOrganizationCentralizationRule#backup_configuration}.

---

##### `logGroupNameConfiguration`<sup>Optional</sup> <a name="logGroupNameConfiguration" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfiguration.property.logGroupNameConfiguration"></a>

```typescript
public readonly logGroupNameConfiguration: ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfiguration">ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/observabilityadmin_organization_centralization_rule#log_group_name_configuration ObservabilityadminOrganizationCentralizationRule#log_group_name_configuration}.

---

##### `logsEncryptionConfiguration`<sup>Optional</sup> <a name="logsEncryptionConfiguration" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfiguration.property.logsEncryptionConfiguration"></a>

```typescript
public readonly logsEncryptionConfiguration: ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfiguration">ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/observabilityadmin_organization_centralization_rule#logs_encryption_configuration ObservabilityadminOrganizationCentralizationRule#logs_encryption_configuration}.

---

##### `tagPropagationConfiguration`<sup>Optional</sup> <a name="tagPropagationConfiguration" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfiguration.property.tagPropagationConfiguration"></a>

```typescript
public readonly tagPropagationConfiguration: ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationTagPropagationConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationTagPropagationConfiguration">ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationTagPropagationConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/observabilityadmin_organization_centralization_rule#tag_propagation_configuration ObservabilityadminOrganizationCentralizationRule#tag_propagation_configuration}.

---

### ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfiguration <a name="ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfiguration" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfiguration.Initializer"></a>

```typescript
import { observabilityadminOrganizationCentralizationRule } from '@cdktn/provider-awscc'

const observabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfiguration: observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfiguration.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/observabilityadmin_organization_centralization_rule#kms_key_arn ObservabilityadminOrganizationCentralizationRule#kms_key_arn}. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfiguration.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/observabilityadmin_organization_centralization_rule#region ObservabilityadminOrganizationCentralizationRule#region}. |

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfiguration.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/observabilityadmin_organization_centralization_rule#kms_key_arn ObservabilityadminOrganizationCentralizationRule#kms_key_arn}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfiguration.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/observabilityadmin_organization_centralization_rule#region ObservabilityadminOrganizationCentralizationRule#region}.

---

### ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfiguration <a name="ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfiguration" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfiguration.Initializer"></a>

```typescript
import { observabilityadminOrganizationCentralizationRule } from '@cdktn/provider-awscc'

const observabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfiguration: observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfiguration.property.logGroupNamePattern">logGroupNamePattern</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/observabilityadmin_organization_centralization_rule#log_group_name_pattern ObservabilityadminOrganizationCentralizationRule#log_group_name_pattern}. |

---

##### `logGroupNamePattern`<sup>Optional</sup> <a name="logGroupNamePattern" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfiguration.property.logGroupNamePattern"></a>

```typescript
public readonly logGroupNamePattern: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/observabilityadmin_organization_centralization_rule#log_group_name_pattern ObservabilityadminOrganizationCentralizationRule#log_group_name_pattern}.

---

### ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfiguration <a name="ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfiguration" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfiguration.Initializer"></a>

```typescript
import { observabilityadminOrganizationCentralizationRule } from '@cdktn/provider-awscc'

const observabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfiguration: observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfiguration.property.encryptionConflictResolutionStrategy">encryptionConflictResolutionStrategy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/observabilityadmin_organization_centralization_rule#encryption_conflict_resolution_strategy ObservabilityadminOrganizationCentralizationRule#encryption_conflict_resolution_strategy}. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfiguration.property.encryptionScope">encryptionScope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/observabilityadmin_organization_centralization_rule#encryption_scope ObservabilityadminOrganizationCentralizationRule#encryption_scope}. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfiguration.property.encryptionStrategy">encryptionStrategy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/observabilityadmin_organization_centralization_rule#encryption_strategy ObservabilityadminOrganizationCentralizationRule#encryption_strategy}. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfiguration.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/observabilityadmin_organization_centralization_rule#kms_key_arn ObservabilityadminOrganizationCentralizationRule#kms_key_arn}. |

---

##### `encryptionConflictResolutionStrategy`<sup>Optional</sup> <a name="encryptionConflictResolutionStrategy" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfiguration.property.encryptionConflictResolutionStrategy"></a>

```typescript
public readonly encryptionConflictResolutionStrategy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/observabilityadmin_organization_centralization_rule#encryption_conflict_resolution_strategy ObservabilityadminOrganizationCentralizationRule#encryption_conflict_resolution_strategy}.

---

##### `encryptionScope`<sup>Optional</sup> <a name="encryptionScope" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfiguration.property.encryptionScope"></a>

```typescript
public readonly encryptionScope: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/observabilityadmin_organization_centralization_rule#encryption_scope ObservabilityadminOrganizationCentralizationRule#encryption_scope}.

---

##### `encryptionStrategy`<sup>Optional</sup> <a name="encryptionStrategy" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfiguration.property.encryptionStrategy"></a>

```typescript
public readonly encryptionStrategy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/observabilityadmin_organization_centralization_rule#encryption_strategy ObservabilityadminOrganizationCentralizationRule#encryption_strategy}.

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfiguration.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/observabilityadmin_organization_centralization_rule#kms_key_arn ObservabilityadminOrganizationCentralizationRule#kms_key_arn}.

---

### ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationTagPropagationConfiguration <a name="ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationTagPropagationConfiguration" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationTagPropagationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationTagPropagationConfiguration.Initializer"></a>

```typescript
import { observabilityadminOrganizationCentralizationRule } from '@cdktn/provider-awscc'

const observabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationTagPropagationConfiguration: observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationTagPropagationConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationTagPropagationConfiguration.property.destinationRoleArn">destinationRoleArn</a></code> | <code>string</code> | The ARN of the destination account IAM role used for tag propagation. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationTagPropagationConfiguration.property.tagConflictResolutionStrategy">tagConflictResolutionStrategy</a></code> | <code>string</code> | The strategy to resolve tag conflicts during propagation. |

---

##### `destinationRoleArn`<sup>Optional</sup> <a name="destinationRoleArn" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationTagPropagationConfiguration.property.destinationRoleArn"></a>

```typescript
public readonly destinationRoleArn: string;
```

- *Type:* string

The ARN of the destination account IAM role used for tag propagation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/observabilityadmin_organization_centralization_rule#destination_role_arn ObservabilityadminOrganizationCentralizationRule#destination_role_arn}

---

##### `tagConflictResolutionStrategy`<sup>Optional</sup> <a name="tagConflictResolutionStrategy" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationTagPropagationConfiguration.property.tagConflictResolutionStrategy"></a>

```typescript
public readonly tagConflictResolutionStrategy: string;
```

- *Type:* string

The strategy to resolve tag conflicts during propagation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/observabilityadmin_organization_centralization_rule#tag_conflict_resolution_strategy ObservabilityadminOrganizationCentralizationRule#tag_conflict_resolution_strategy}

---

### ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfiguration <a name="ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfiguration" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfiguration.Initializer"></a>

```typescript
import { observabilityadminOrganizationCentralizationRule } from '@cdktn/provider-awscc'

const observabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfiguration: observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfiguration.property.backupConfiguration">backupConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfiguration">ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/observabilityadmin_organization_centralization_rule#backup_configuration ObservabilityadminOrganizationCentralizationRule#backup_configuration}. |

---

##### `backupConfiguration`<sup>Optional</sup> <a name="backupConfiguration" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfiguration.property.backupConfiguration"></a>

```typescript
public readonly backupConfiguration: ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfiguration">ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/observabilityadmin_organization_centralization_rule#backup_configuration ObservabilityadminOrganizationCentralizationRule#backup_configuration}.

---

### ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfiguration <a name="ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfiguration" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfiguration.Initializer"></a>

```typescript
import { observabilityadminOrganizationCentralizationRule } from '@cdktn/provider-awscc'

const observabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfiguration: observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfiguration.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/observabilityadmin_organization_centralization_rule#region ObservabilityadminOrganizationCentralizationRule#region}. |

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfiguration.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/observabilityadmin_organization_centralization_rule#region ObservabilityadminOrganizationCentralizationRule#region}.

---

### ObservabilityadminOrganizationCentralizationRuleRuleSource <a name="ObservabilityadminOrganizationCentralizationRuleRuleSource" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSource.Initializer"></a>

```typescript
import { observabilityadminOrganizationCentralizationRule } from '@cdktn/provider-awscc'

const observabilityadminOrganizationCentralizationRuleRuleSource: observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSource.property.regions">regions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/observabilityadmin_organization_centralization_rule#regions ObservabilityadminOrganizationCentralizationRule#regions}. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSource.property.scope">scope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/observabilityadmin_organization_centralization_rule#scope ObservabilityadminOrganizationCentralizationRule#scope}. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSource.property.sourceLogsConfiguration">sourceLogsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfiguration">ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/observabilityadmin_organization_centralization_rule#source_logs_configuration ObservabilityadminOrganizationCentralizationRule#source_logs_configuration}. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSource.property.sourceMetricsConfiguration">sourceMetricsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfiguration">ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/observabilityadmin_organization_centralization_rule#source_metrics_configuration ObservabilityadminOrganizationCentralizationRule#source_metrics_configuration}. |

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSource.property.regions"></a>

```typescript
public readonly regions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/observabilityadmin_organization_centralization_rule#regions ObservabilityadminOrganizationCentralizationRule#regions}.

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSource.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/observabilityadmin_organization_centralization_rule#scope ObservabilityadminOrganizationCentralizationRule#scope}.

---

##### `sourceLogsConfiguration`<sup>Optional</sup> <a name="sourceLogsConfiguration" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSource.property.sourceLogsConfiguration"></a>

```typescript
public readonly sourceLogsConfiguration: ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfiguration">ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/observabilityadmin_organization_centralization_rule#source_logs_configuration ObservabilityadminOrganizationCentralizationRule#source_logs_configuration}.

---

##### `sourceMetricsConfiguration`<sup>Optional</sup> <a name="sourceMetricsConfiguration" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSource.property.sourceMetricsConfiguration"></a>

```typescript
public readonly sourceMetricsConfiguration: ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfiguration">ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/observabilityadmin_organization_centralization_rule#source_metrics_configuration ObservabilityadminOrganizationCentralizationRule#source_metrics_configuration}.

---

### ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfiguration <a name="ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfiguration" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfiguration.Initializer"></a>

```typescript
import { observabilityadminOrganizationCentralizationRule } from '@cdktn/provider-awscc'

const observabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfiguration: observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfiguration.property.dataSourceSelectionCriteria">dataSourceSelectionCriteria</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/observabilityadmin_organization_centralization_rule#data_source_selection_criteria ObservabilityadminOrganizationCentralizationRule#data_source_selection_criteria}. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfiguration.property.encryptedLogGroupStrategy">encryptedLogGroupStrategy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/observabilityadmin_organization_centralization_rule#encrypted_log_group_strategy ObservabilityadminOrganizationCentralizationRule#encrypted_log_group_strategy}. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfiguration.property.logGroupSelectionCriteria">logGroupSelectionCriteria</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/observabilityadmin_organization_centralization_rule#log_group_selection_criteria ObservabilityadminOrganizationCentralizationRule#log_group_selection_criteria}. |

---

##### `dataSourceSelectionCriteria`<sup>Optional</sup> <a name="dataSourceSelectionCriteria" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfiguration.property.dataSourceSelectionCriteria"></a>

```typescript
public readonly dataSourceSelectionCriteria: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/observabilityadmin_organization_centralization_rule#data_source_selection_criteria ObservabilityadminOrganizationCentralizationRule#data_source_selection_criteria}.

---

##### `encryptedLogGroupStrategy`<sup>Optional</sup> <a name="encryptedLogGroupStrategy" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfiguration.property.encryptedLogGroupStrategy"></a>

```typescript
public readonly encryptedLogGroupStrategy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/observabilityadmin_organization_centralization_rule#encrypted_log_group_strategy ObservabilityadminOrganizationCentralizationRule#encrypted_log_group_strategy}.

---

##### `logGroupSelectionCriteria`<sup>Optional</sup> <a name="logGroupSelectionCriteria" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfiguration.property.logGroupSelectionCriteria"></a>

```typescript
public readonly logGroupSelectionCriteria: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/observabilityadmin_organization_centralization_rule#log_group_selection_criteria ObservabilityadminOrganizationCentralizationRule#log_group_selection_criteria}.

---

### ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfiguration <a name="ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfiguration" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfiguration.Initializer"></a>

```typescript
import { observabilityadminOrganizationCentralizationRule } from '@cdktn/provider-awscc'

const observabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfiguration: observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfiguration.property.metricsSelectionCriteria">metricsSelectionCriteria</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/observabilityadmin_organization_centralization_rule#metrics_selection_criteria ObservabilityadminOrganizationCentralizationRule#metrics_selection_criteria}. |

---

##### `metricsSelectionCriteria`<sup>Optional</sup> <a name="metricsSelectionCriteria" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfiguration.property.metricsSelectionCriteria"></a>

```typescript
public readonly metricsSelectionCriteria: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/observabilityadmin_organization_centralization_rule#metrics_selection_criteria ObservabilityadminOrganizationCentralizationRule#metrics_selection_criteria}.

---

### ObservabilityadminOrganizationCentralizationRuleTags <a name="ObservabilityadminOrganizationCentralizationRuleTags" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTags.Initializer"></a>

```typescript
import { observabilityadminOrganizationCentralizationRule } from '@cdktn/provider-awscc'

const observabilityadminOrganizationCentralizationRuleTags: observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/observabilityadmin_organization_centralization_rule#key ObservabilityadminOrganizationCentralizationRule#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/observabilityadmin_organization_centralization_rule#value ObservabilityadminOrganizationCentralizationRule#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference <a name="ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.Initializer"></a>

```typescript
import { observabilityadminOrganizationCentralizationRule } from '@cdktn/provider-awscc'

new observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.resetKmsKeyArn">resetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKeyArn` <a name="resetKmsKeyArn" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.resetKmsKeyArn"></a>

```typescript
public resetKmsKeyArn(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.resetRegion"></a>

```typescript
public resetRegion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfiguration">ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.property.kmsKeyArnInput"></a>

```typescript
public readonly kmsKeyArnInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfiguration">ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfiguration</a>

---


### ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference <a name="ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.Initializer"></a>

```typescript
import { observabilityadminOrganizationCentralizationRule } from '@cdktn/provider-awscc'

new observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.resetLogGroupNamePattern">resetLogGroupNamePattern</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLogGroupNamePattern` <a name="resetLogGroupNamePattern" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.resetLogGroupNamePattern"></a>

```typescript
public resetLogGroupNamePattern(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.property.logGroupNamePatternInput">logGroupNamePatternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.property.logGroupNamePattern">logGroupNamePattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfiguration">ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `logGroupNamePatternInput`<sup>Optional</sup> <a name="logGroupNamePatternInput" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.property.logGroupNamePatternInput"></a>

```typescript
public readonly logGroupNamePatternInput: string;
```

- *Type:* string

---

##### `logGroupNamePattern`<sup>Required</sup> <a name="logGroupNamePattern" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.property.logGroupNamePattern"></a>

```typescript
public readonly logGroupNamePattern: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfiguration">ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfiguration</a>

---


### ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference <a name="ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.Initializer"></a>

```typescript
import { observabilityadminOrganizationCentralizationRule } from '@cdktn/provider-awscc'

new observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.resetEncryptionConflictResolutionStrategy">resetEncryptionConflictResolutionStrategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.resetEncryptionScope">resetEncryptionScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.resetEncryptionStrategy">resetEncryptionStrategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.resetKmsKeyArn">resetKmsKeyArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEncryptionConflictResolutionStrategy` <a name="resetEncryptionConflictResolutionStrategy" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.resetEncryptionConflictResolutionStrategy"></a>

```typescript
public resetEncryptionConflictResolutionStrategy(): void
```

##### `resetEncryptionScope` <a name="resetEncryptionScope" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.resetEncryptionScope"></a>

```typescript
public resetEncryptionScope(): void
```

##### `resetEncryptionStrategy` <a name="resetEncryptionStrategy" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.resetEncryptionStrategy"></a>

```typescript
public resetEncryptionStrategy(): void
```

##### `resetKmsKeyArn` <a name="resetKmsKeyArn" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.resetKmsKeyArn"></a>

```typescript
public resetKmsKeyArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.property.encryptionConflictResolutionStrategyInput">encryptionConflictResolutionStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.property.encryptionScopeInput">encryptionScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.property.encryptionStrategyInput">encryptionStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.property.encryptionConflictResolutionStrategy">encryptionConflictResolutionStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.property.encryptionScope">encryptionScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.property.encryptionStrategy">encryptionStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfiguration">ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `encryptionConflictResolutionStrategyInput`<sup>Optional</sup> <a name="encryptionConflictResolutionStrategyInput" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.property.encryptionConflictResolutionStrategyInput"></a>

```typescript
public readonly encryptionConflictResolutionStrategyInput: string;
```

- *Type:* string

---

##### `encryptionScopeInput`<sup>Optional</sup> <a name="encryptionScopeInput" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.property.encryptionScopeInput"></a>

```typescript
public readonly encryptionScopeInput: string;
```

- *Type:* string

---

##### `encryptionStrategyInput`<sup>Optional</sup> <a name="encryptionStrategyInput" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.property.encryptionStrategyInput"></a>

```typescript
public readonly encryptionStrategyInput: string;
```

- *Type:* string

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.property.kmsKeyArnInput"></a>

```typescript
public readonly kmsKeyArnInput: string;
```

- *Type:* string

---

##### `encryptionConflictResolutionStrategy`<sup>Required</sup> <a name="encryptionConflictResolutionStrategy" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.property.encryptionConflictResolutionStrategy"></a>

```typescript
public readonly encryptionConflictResolutionStrategy: string;
```

- *Type:* string

---

##### `encryptionScope`<sup>Required</sup> <a name="encryptionScope" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.property.encryptionScope"></a>

```typescript
public readonly encryptionScope: string;
```

- *Type:* string

---

##### `encryptionStrategy`<sup>Required</sup> <a name="encryptionStrategy" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.property.encryptionStrategy"></a>

```typescript
public readonly encryptionStrategy: string;
```

- *Type:* string

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfiguration">ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfiguration</a>

---


### ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference <a name="ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.Initializer"></a>

```typescript
import { observabilityadminOrganizationCentralizationRule } from '@cdktn/provider-awscc'

new observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.putBackupConfiguration">putBackupConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.putLogGroupNameConfiguration">putLogGroupNameConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.putLogsEncryptionConfiguration">putLogsEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.putTagPropagationConfiguration">putTagPropagationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.resetBackupConfiguration">resetBackupConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.resetLogGroupNameConfiguration">resetLogGroupNameConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.resetLogsEncryptionConfiguration">resetLogsEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.resetTagPropagationConfiguration">resetTagPropagationConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBackupConfiguration` <a name="putBackupConfiguration" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.putBackupConfiguration"></a>

```typescript
public putBackupConfiguration(value: ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.putBackupConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfiguration">ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfiguration</a>

---

##### `putLogGroupNameConfiguration` <a name="putLogGroupNameConfiguration" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.putLogGroupNameConfiguration"></a>

```typescript
public putLogGroupNameConfiguration(value: ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.putLogGroupNameConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfiguration">ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfiguration</a>

---

##### `putLogsEncryptionConfiguration` <a name="putLogsEncryptionConfiguration" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.putLogsEncryptionConfiguration"></a>

```typescript
public putLogsEncryptionConfiguration(value: ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.putLogsEncryptionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfiguration">ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfiguration</a>

---

##### `putTagPropagationConfiguration` <a name="putTagPropagationConfiguration" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.putTagPropagationConfiguration"></a>

```typescript
public putTagPropagationConfiguration(value: ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationTagPropagationConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.putTagPropagationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationTagPropagationConfiguration">ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationTagPropagationConfiguration</a>

---

##### `resetBackupConfiguration` <a name="resetBackupConfiguration" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.resetBackupConfiguration"></a>

```typescript
public resetBackupConfiguration(): void
```

##### `resetLogGroupNameConfiguration` <a name="resetLogGroupNameConfiguration" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.resetLogGroupNameConfiguration"></a>

```typescript
public resetLogGroupNameConfiguration(): void
```

##### `resetLogsEncryptionConfiguration` <a name="resetLogsEncryptionConfiguration" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.resetLogsEncryptionConfiguration"></a>

```typescript
public resetLogsEncryptionConfiguration(): void
```

##### `resetTagPropagationConfiguration` <a name="resetTagPropagationConfiguration" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.resetTagPropagationConfiguration"></a>

```typescript
public resetTagPropagationConfiguration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.property.backupConfiguration">backupConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference">ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.property.logGroupNameConfiguration">logGroupNameConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference">ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.property.logsEncryptionConfiguration">logsEncryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference">ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.property.tagPropagationConfiguration">tagPropagationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationTagPropagationConfigurationOutputReference">ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationTagPropagationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.property.backupConfigurationInput">backupConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfiguration">ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.property.logGroupNameConfigurationInput">logGroupNameConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfiguration">ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.property.logsEncryptionConfigurationInput">logsEncryptionConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfiguration">ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.property.tagPropagationConfigurationInput">tagPropagationConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationTagPropagationConfiguration">ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationTagPropagationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfiguration">ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `backupConfiguration`<sup>Required</sup> <a name="backupConfiguration" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.property.backupConfiguration"></a>

```typescript
public readonly backupConfiguration: ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference">ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference</a>

---

##### `logGroupNameConfiguration`<sup>Required</sup> <a name="logGroupNameConfiguration" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.property.logGroupNameConfiguration"></a>

```typescript
public readonly logGroupNameConfiguration: ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference">ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference</a>

---

##### `logsEncryptionConfiguration`<sup>Required</sup> <a name="logsEncryptionConfiguration" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.property.logsEncryptionConfiguration"></a>

```typescript
public readonly logsEncryptionConfiguration: ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference">ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference</a>

---

##### `tagPropagationConfiguration`<sup>Required</sup> <a name="tagPropagationConfiguration" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.property.tagPropagationConfiguration"></a>

```typescript
public readonly tagPropagationConfiguration: ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationTagPropagationConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationTagPropagationConfigurationOutputReference">ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationTagPropagationConfigurationOutputReference</a>

---

##### `backupConfigurationInput`<sup>Optional</sup> <a name="backupConfigurationInput" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.property.backupConfigurationInput"></a>

```typescript
public readonly backupConfigurationInput: IResolvable | ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfiguration">ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfiguration</a>

---

##### `logGroupNameConfigurationInput`<sup>Optional</sup> <a name="logGroupNameConfigurationInput" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.property.logGroupNameConfigurationInput"></a>

```typescript
public readonly logGroupNameConfigurationInput: IResolvable | ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfiguration">ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfiguration</a>

---

##### `logsEncryptionConfigurationInput`<sup>Optional</sup> <a name="logsEncryptionConfigurationInput" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.property.logsEncryptionConfigurationInput"></a>

```typescript
public readonly logsEncryptionConfigurationInput: IResolvable | ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfiguration">ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfiguration</a>

---

##### `tagPropagationConfigurationInput`<sup>Optional</sup> <a name="tagPropagationConfigurationInput" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.property.tagPropagationConfigurationInput"></a>

```typescript
public readonly tagPropagationConfigurationInput: IResolvable | ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationTagPropagationConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationTagPropagationConfiguration">ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationTagPropagationConfiguration</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfiguration">ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfiguration</a>

---


### ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationTagPropagationConfigurationOutputReference <a name="ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationTagPropagationConfigurationOutputReference" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationTagPropagationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationTagPropagationConfigurationOutputReference.Initializer"></a>

```typescript
import { observabilityadminOrganizationCentralizationRule } from '@cdktn/provider-awscc'

new observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationTagPropagationConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationTagPropagationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationTagPropagationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationTagPropagationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationTagPropagationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationTagPropagationConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationTagPropagationConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationTagPropagationConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationTagPropagationConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationTagPropagationConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationTagPropagationConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationTagPropagationConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationTagPropagationConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationTagPropagationConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationTagPropagationConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationTagPropagationConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationTagPropagationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationTagPropagationConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationTagPropagationConfigurationOutputReference.resetDestinationRoleArn">resetDestinationRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationTagPropagationConfigurationOutputReference.resetTagConflictResolutionStrategy">resetTagConflictResolutionStrategy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationTagPropagationConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationTagPropagationConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationTagPropagationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationTagPropagationConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationTagPropagationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationTagPropagationConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationTagPropagationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationTagPropagationConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationTagPropagationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationTagPropagationConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationTagPropagationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationTagPropagationConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationTagPropagationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationTagPropagationConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationTagPropagationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationTagPropagationConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationTagPropagationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationTagPropagationConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationTagPropagationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationTagPropagationConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationTagPropagationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationTagPropagationConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationTagPropagationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationTagPropagationConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDestinationRoleArn` <a name="resetDestinationRoleArn" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationTagPropagationConfigurationOutputReference.resetDestinationRoleArn"></a>

```typescript
public resetDestinationRoleArn(): void
```

##### `resetTagConflictResolutionStrategy` <a name="resetTagConflictResolutionStrategy" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationTagPropagationConfigurationOutputReference.resetTagConflictResolutionStrategy"></a>

```typescript
public resetTagConflictResolutionStrategy(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationTagPropagationConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationTagPropagationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationTagPropagationConfigurationOutputReference.property.destinationRoleArnInput">destinationRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationTagPropagationConfigurationOutputReference.property.tagConflictResolutionStrategyInput">tagConflictResolutionStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationTagPropagationConfigurationOutputReference.property.destinationRoleArn">destinationRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationTagPropagationConfigurationOutputReference.property.tagConflictResolutionStrategy">tagConflictResolutionStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationTagPropagationConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationTagPropagationConfiguration">ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationTagPropagationConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationTagPropagationConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationTagPropagationConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationRoleArnInput`<sup>Optional</sup> <a name="destinationRoleArnInput" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationTagPropagationConfigurationOutputReference.property.destinationRoleArnInput"></a>

```typescript
public readonly destinationRoleArnInput: string;
```

- *Type:* string

---

##### `tagConflictResolutionStrategyInput`<sup>Optional</sup> <a name="tagConflictResolutionStrategyInput" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationTagPropagationConfigurationOutputReference.property.tagConflictResolutionStrategyInput"></a>

```typescript
public readonly tagConflictResolutionStrategyInput: string;
```

- *Type:* string

---

##### `destinationRoleArn`<sup>Required</sup> <a name="destinationRoleArn" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationTagPropagationConfigurationOutputReference.property.destinationRoleArn"></a>

```typescript
public readonly destinationRoleArn: string;
```

- *Type:* string

---

##### `tagConflictResolutionStrategy`<sup>Required</sup> <a name="tagConflictResolutionStrategy" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationTagPropagationConfigurationOutputReference.property.tagConflictResolutionStrategy"></a>

```typescript
public readonly tagConflictResolutionStrategy: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationTagPropagationConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationTagPropagationConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationTagPropagationConfiguration">ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationTagPropagationConfiguration</a>

---


### ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference <a name="ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.Initializer"></a>

```typescript
import { observabilityadminOrganizationCentralizationRule } from '@cdktn/provider-awscc'

new observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.resetRegion"></a>

```typescript
public resetRegion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfiguration">ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfiguration">ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfiguration</a>

---


### ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference <a name="ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.Initializer"></a>

```typescript
import { observabilityadminOrganizationCentralizationRule } from '@cdktn/provider-awscc'

new observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.putBackupConfiguration">putBackupConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.resetBackupConfiguration">resetBackupConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBackupConfiguration` <a name="putBackupConfiguration" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.putBackupConfiguration"></a>

```typescript
public putBackupConfiguration(value: ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.putBackupConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfiguration">ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfiguration</a>

---

##### `resetBackupConfiguration` <a name="resetBackupConfiguration" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.resetBackupConfiguration"></a>

```typescript
public resetBackupConfiguration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.property.backupConfiguration">backupConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference">ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.property.backupConfigurationInput">backupConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfiguration">ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfiguration">ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `backupConfiguration`<sup>Required</sup> <a name="backupConfiguration" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.property.backupConfiguration"></a>

```typescript
public readonly backupConfiguration: ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference">ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference</a>

---

##### `backupConfigurationInput`<sup>Optional</sup> <a name="backupConfigurationInput" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.property.backupConfigurationInput"></a>

```typescript
public readonly backupConfigurationInput: IResolvable | ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfiguration">ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfiguration</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfiguration">ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfiguration</a>

---


### ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference <a name="ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.Initializer"></a>

```typescript
import { observabilityadminOrganizationCentralizationRule } from '@cdktn/provider-awscc'

new observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.putDestinationLogsConfiguration">putDestinationLogsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.putDestinationMetricsConfiguration">putDestinationMetricsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.resetAccount">resetAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.resetDestinationLogsConfiguration">resetDestinationLogsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.resetDestinationMetricsConfiguration">resetDestinationMetricsConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDestinationLogsConfiguration` <a name="putDestinationLogsConfiguration" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.putDestinationLogsConfiguration"></a>

```typescript
public putDestinationLogsConfiguration(value: ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.putDestinationLogsConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfiguration">ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfiguration</a>

---

##### `putDestinationMetricsConfiguration` <a name="putDestinationMetricsConfiguration" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.putDestinationMetricsConfiguration"></a>

```typescript
public putDestinationMetricsConfiguration(value: ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.putDestinationMetricsConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfiguration">ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfiguration</a>

---

##### `resetAccount` <a name="resetAccount" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.resetAccount"></a>

```typescript
public resetAccount(): void
```

##### `resetDestinationLogsConfiguration` <a name="resetDestinationLogsConfiguration" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.resetDestinationLogsConfiguration"></a>

```typescript
public resetDestinationLogsConfiguration(): void
```

##### `resetDestinationMetricsConfiguration` <a name="resetDestinationMetricsConfiguration" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.resetDestinationMetricsConfiguration"></a>

```typescript
public resetDestinationMetricsConfiguration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.property.destinationLogsConfiguration">destinationLogsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference">ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.property.destinationMetricsConfiguration">destinationMetricsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference">ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.property.accountInput">accountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.property.destinationLogsConfigurationInput">destinationLogsConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfiguration">ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.property.destinationMetricsConfigurationInput">destinationMetricsConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfiguration">ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.property.account">account</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestination">ObservabilityadminOrganizationCentralizationRuleRuleDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationLogsConfiguration`<sup>Required</sup> <a name="destinationLogsConfiguration" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.property.destinationLogsConfiguration"></a>

```typescript
public readonly destinationLogsConfiguration: ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference">ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference</a>

---

##### `destinationMetricsConfiguration`<sup>Required</sup> <a name="destinationMetricsConfiguration" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.property.destinationMetricsConfiguration"></a>

```typescript
public readonly destinationMetricsConfiguration: ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference">ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference</a>

---

##### `accountInput`<sup>Optional</sup> <a name="accountInput" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.property.accountInput"></a>

```typescript
public readonly accountInput: string;
```

- *Type:* string

---

##### `destinationLogsConfigurationInput`<sup>Optional</sup> <a name="destinationLogsConfigurationInput" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.property.destinationLogsConfigurationInput"></a>

```typescript
public readonly destinationLogsConfigurationInput: IResolvable | ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfiguration">ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfiguration</a>

---

##### `destinationMetricsConfigurationInput`<sup>Optional</sup> <a name="destinationMetricsConfigurationInput" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.property.destinationMetricsConfigurationInput"></a>

```typescript
public readonly destinationMetricsConfigurationInput: IResolvable | ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfiguration">ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfiguration</a>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `account`<sup>Required</sup> <a name="account" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ObservabilityadminOrganizationCentralizationRuleRuleDestination;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestination">ObservabilityadminOrganizationCentralizationRuleRuleDestination</a>

---


### ObservabilityadminOrganizationCentralizationRuleRuleOutputReference <a name="ObservabilityadminOrganizationCentralizationRuleRuleOutputReference" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference.Initializer"></a>

```typescript
import { observabilityadminOrganizationCentralizationRule } from '@cdktn/provider-awscc'

new observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference.putDestination">putDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference.putSource">putSource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDestination` <a name="putDestination" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference.putDestination"></a>

```typescript
public putDestination(value: ObservabilityadminOrganizationCentralizationRuleRuleDestination): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference.putDestination.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestination">ObservabilityadminOrganizationCentralizationRuleRuleDestination</a>

---

##### `putSource` <a name="putSource" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference.putSource"></a>

```typescript
public putSource(value: ObservabilityadminOrganizationCentralizationRuleRuleSource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSource">ObservabilityadminOrganizationCentralizationRuleRuleSource</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference.property.destination">destination</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference">ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference.property.source">source</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference">ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference.property.destinationInput">destinationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestination">ObservabilityadminOrganizationCentralizationRuleRuleDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference.property.sourceInput">sourceInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSource">ObservabilityadminOrganizationCentralizationRuleRuleSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRule">ObservabilityadminOrganizationCentralizationRuleRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference.property.destination"></a>

```typescript
public readonly destination: ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference">ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference</a>

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference.property.source"></a>

```typescript
public readonly source: ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference">ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference</a>

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference.property.destinationInput"></a>

```typescript
public readonly destinationInput: IResolvable | ObservabilityadminOrganizationCentralizationRuleRuleDestination;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestination">ObservabilityadminOrganizationCentralizationRuleRuleDestination</a>

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference.property.sourceInput"></a>

```typescript
public readonly sourceInput: IResolvable | ObservabilityadminOrganizationCentralizationRuleRuleSource;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSource">ObservabilityadminOrganizationCentralizationRuleRuleSource</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ObservabilityadminOrganizationCentralizationRuleRule;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRule">ObservabilityadminOrganizationCentralizationRuleRule</a>

---


### ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference <a name="ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.Initializer"></a>

```typescript
import { observabilityadminOrganizationCentralizationRule } from '@cdktn/provider-awscc'

new observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.putSourceLogsConfiguration">putSourceLogsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.putSourceMetricsConfiguration">putSourceMetricsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.resetScope">resetScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.resetSourceLogsConfiguration">resetSourceLogsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.resetSourceMetricsConfiguration">resetSourceMetricsConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSourceLogsConfiguration` <a name="putSourceLogsConfiguration" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.putSourceLogsConfiguration"></a>

```typescript
public putSourceLogsConfiguration(value: ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.putSourceLogsConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfiguration">ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfiguration</a>

---

##### `putSourceMetricsConfiguration` <a name="putSourceMetricsConfiguration" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.putSourceMetricsConfiguration"></a>

```typescript
public putSourceMetricsConfiguration(value: ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.putSourceMetricsConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfiguration">ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfiguration</a>

---

##### `resetScope` <a name="resetScope" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.resetScope"></a>

```typescript
public resetScope(): void
```

##### `resetSourceLogsConfiguration` <a name="resetSourceLogsConfiguration" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.resetSourceLogsConfiguration"></a>

```typescript
public resetSourceLogsConfiguration(): void
```

##### `resetSourceMetricsConfiguration` <a name="resetSourceMetricsConfiguration" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.resetSourceMetricsConfiguration"></a>

```typescript
public resetSourceMetricsConfiguration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.property.sourceLogsConfiguration">sourceLogsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference">ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.property.sourceMetricsConfiguration">sourceMetricsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference">ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.property.regionsInput">regionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.property.scopeInput">scopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.property.sourceLogsConfigurationInput">sourceLogsConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfiguration">ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.property.sourceMetricsConfigurationInput">sourceMetricsConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfiguration">ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.property.regions">regions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.property.scope">scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSource">ObservabilityadminOrganizationCentralizationRuleRuleSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sourceLogsConfiguration`<sup>Required</sup> <a name="sourceLogsConfiguration" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.property.sourceLogsConfiguration"></a>

```typescript
public readonly sourceLogsConfiguration: ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference">ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference</a>

---

##### `sourceMetricsConfiguration`<sup>Required</sup> <a name="sourceMetricsConfiguration" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.property.sourceMetricsConfiguration"></a>

```typescript
public readonly sourceMetricsConfiguration: ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference">ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference</a>

---

##### `regionsInput`<sup>Optional</sup> <a name="regionsInput" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.property.regionsInput"></a>

```typescript
public readonly regionsInput: string[];
```

- *Type:* string[]

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.property.scopeInput"></a>

```typescript
public readonly scopeInput: string;
```

- *Type:* string

---

##### `sourceLogsConfigurationInput`<sup>Optional</sup> <a name="sourceLogsConfigurationInput" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.property.sourceLogsConfigurationInput"></a>

```typescript
public readonly sourceLogsConfigurationInput: IResolvable | ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfiguration">ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfiguration</a>

---

##### `sourceMetricsConfigurationInput`<sup>Optional</sup> <a name="sourceMetricsConfigurationInput" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.property.sourceMetricsConfigurationInput"></a>

```typescript
public readonly sourceMetricsConfigurationInput: IResolvable | ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfiguration">ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfiguration</a>

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.property.regions"></a>

```typescript
public readonly regions: string[];
```

- *Type:* string[]

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ObservabilityadminOrganizationCentralizationRuleRuleSource;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSource">ObservabilityadminOrganizationCentralizationRuleRuleSource</a>

---


### ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference <a name="ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.Initializer"></a>

```typescript
import { observabilityadminOrganizationCentralizationRule } from '@cdktn/provider-awscc'

new observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.resetDataSourceSelectionCriteria">resetDataSourceSelectionCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.resetEncryptedLogGroupStrategy">resetEncryptedLogGroupStrategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.resetLogGroupSelectionCriteria">resetLogGroupSelectionCriteria</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDataSourceSelectionCriteria` <a name="resetDataSourceSelectionCriteria" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.resetDataSourceSelectionCriteria"></a>

```typescript
public resetDataSourceSelectionCriteria(): void
```

##### `resetEncryptedLogGroupStrategy` <a name="resetEncryptedLogGroupStrategy" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.resetEncryptedLogGroupStrategy"></a>

```typescript
public resetEncryptedLogGroupStrategy(): void
```

##### `resetLogGroupSelectionCriteria` <a name="resetLogGroupSelectionCriteria" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.resetLogGroupSelectionCriteria"></a>

```typescript
public resetLogGroupSelectionCriteria(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.property.dataSourceSelectionCriteriaInput">dataSourceSelectionCriteriaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.property.encryptedLogGroupStrategyInput">encryptedLogGroupStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.property.logGroupSelectionCriteriaInput">logGroupSelectionCriteriaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.property.dataSourceSelectionCriteria">dataSourceSelectionCriteria</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.property.encryptedLogGroupStrategy">encryptedLogGroupStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.property.logGroupSelectionCriteria">logGroupSelectionCriteria</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfiguration">ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataSourceSelectionCriteriaInput`<sup>Optional</sup> <a name="dataSourceSelectionCriteriaInput" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.property.dataSourceSelectionCriteriaInput"></a>

```typescript
public readonly dataSourceSelectionCriteriaInput: string;
```

- *Type:* string

---

##### `encryptedLogGroupStrategyInput`<sup>Optional</sup> <a name="encryptedLogGroupStrategyInput" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.property.encryptedLogGroupStrategyInput"></a>

```typescript
public readonly encryptedLogGroupStrategyInput: string;
```

- *Type:* string

---

##### `logGroupSelectionCriteriaInput`<sup>Optional</sup> <a name="logGroupSelectionCriteriaInput" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.property.logGroupSelectionCriteriaInput"></a>

```typescript
public readonly logGroupSelectionCriteriaInput: string;
```

- *Type:* string

---

##### `dataSourceSelectionCriteria`<sup>Required</sup> <a name="dataSourceSelectionCriteria" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.property.dataSourceSelectionCriteria"></a>

```typescript
public readonly dataSourceSelectionCriteria: string;
```

- *Type:* string

---

##### `encryptedLogGroupStrategy`<sup>Required</sup> <a name="encryptedLogGroupStrategy" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.property.encryptedLogGroupStrategy"></a>

```typescript
public readonly encryptedLogGroupStrategy: string;
```

- *Type:* string

---

##### `logGroupSelectionCriteria`<sup>Required</sup> <a name="logGroupSelectionCriteria" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.property.logGroupSelectionCriteria"></a>

```typescript
public readonly logGroupSelectionCriteria: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfiguration">ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfiguration</a>

---


### ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference <a name="ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.Initializer"></a>

```typescript
import { observabilityadminOrganizationCentralizationRule } from '@cdktn/provider-awscc'

new observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.resetMetricsSelectionCriteria">resetMetricsSelectionCriteria</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetricsSelectionCriteria` <a name="resetMetricsSelectionCriteria" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.resetMetricsSelectionCriteria"></a>

```typescript
public resetMetricsSelectionCriteria(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.property.metricsSelectionCriteriaInput">metricsSelectionCriteriaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.property.metricsSelectionCriteria">metricsSelectionCriteria</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfiguration">ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricsSelectionCriteriaInput`<sup>Optional</sup> <a name="metricsSelectionCriteriaInput" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.property.metricsSelectionCriteriaInput"></a>

```typescript
public readonly metricsSelectionCriteriaInput: string;
```

- *Type:* string

---

##### `metricsSelectionCriteria`<sup>Required</sup> <a name="metricsSelectionCriteria" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.property.metricsSelectionCriteria"></a>

```typescript
public readonly metricsSelectionCriteria: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfiguration">ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfiguration</a>

---


### ObservabilityadminOrganizationCentralizationRuleTagsList <a name="ObservabilityadminOrganizationCentralizationRuleTagsList" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsList.Initializer"></a>

```typescript
import { observabilityadminOrganizationCentralizationRule } from '@cdktn/provider-awscc'

new observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsList.get"></a>

```typescript
public get(index: number): ObservabilityadminOrganizationCentralizationRuleTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTags">ObservabilityadminOrganizationCentralizationRuleTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ObservabilityadminOrganizationCentralizationRuleTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTags">ObservabilityadminOrganizationCentralizationRuleTags</a>[]

---


### ObservabilityadminOrganizationCentralizationRuleTagsOutputReference <a name="ObservabilityadminOrganizationCentralizationRuleTagsOutputReference" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.Initializer"></a>

```typescript
import { observabilityadminOrganizationCentralizationRule } from '@cdktn/provider-awscc'

new observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTags">ObservabilityadminOrganizationCentralizationRuleTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ObservabilityadminOrganizationCentralizationRuleTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTags">ObservabilityadminOrganizationCentralizationRuleTags</a>

---



