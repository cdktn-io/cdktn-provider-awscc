# `configOrganizationConfigRule` Submodule <a name="`configOrganizationConfigRule` Submodule" id="@cdktn/provider-awscc.configOrganizationConfigRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConfigOrganizationConfigRule <a name="ConfigOrganizationConfigRule" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule awscc_config_organization_config_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.Initializer"></a>

```typescript
import { configOrganizationConfigRule } from '@cdktn/provider-awscc'

new configOrganizationConfigRule.ConfigOrganizationConfigRule(scope: Construct, id: string, config: ConfigOrganizationConfigRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleConfig">ConfigOrganizationConfigRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleConfig">ConfigOrganizationConfigRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.putOrganizationCustomPolicyRuleMetadata">putOrganizationCustomPolicyRuleMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.putOrganizationCustomRuleMetadata">putOrganizationCustomRuleMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.putOrganizationManagedRuleMetadata">putOrganizationManagedRuleMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.resetExcludedAccounts">resetExcludedAccounts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.resetOrganizationCustomPolicyRuleMetadata">resetOrganizationCustomPolicyRuleMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.resetOrganizationCustomRuleMetadata">resetOrganizationCustomRuleMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.resetOrganizationManagedRuleMetadata">resetOrganizationManagedRuleMetadata</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putOrganizationCustomPolicyRuleMetadata` <a name="putOrganizationCustomPolicyRuleMetadata" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.putOrganizationCustomPolicyRuleMetadata"></a>

```typescript
public putOrganizationCustomPolicyRuleMetadata(value: ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.putOrganizationCustomPolicyRuleMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata">ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata</a>

---

##### `putOrganizationCustomRuleMetadata` <a name="putOrganizationCustomRuleMetadata" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.putOrganizationCustomRuleMetadata"></a>

```typescript
public putOrganizationCustomRuleMetadata(value: ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.putOrganizationCustomRuleMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata">ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata</a>

---

##### `putOrganizationManagedRuleMetadata` <a name="putOrganizationManagedRuleMetadata" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.putOrganizationManagedRuleMetadata"></a>

```typescript
public putOrganizationManagedRuleMetadata(value: ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.putOrganizationManagedRuleMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata">ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata</a>

---

##### `resetExcludedAccounts` <a name="resetExcludedAccounts" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.resetExcludedAccounts"></a>

```typescript
public resetExcludedAccounts(): void
```

##### `resetOrganizationCustomPolicyRuleMetadata` <a name="resetOrganizationCustomPolicyRuleMetadata" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.resetOrganizationCustomPolicyRuleMetadata"></a>

```typescript
public resetOrganizationCustomPolicyRuleMetadata(): void
```

##### `resetOrganizationCustomRuleMetadata` <a name="resetOrganizationCustomRuleMetadata" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.resetOrganizationCustomRuleMetadata"></a>

```typescript
public resetOrganizationCustomRuleMetadata(): void
```

##### `resetOrganizationManagedRuleMetadata` <a name="resetOrganizationManagedRuleMetadata" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.resetOrganizationManagedRuleMetadata"></a>

```typescript
public resetOrganizationManagedRuleMetadata(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ConfigOrganizationConfigRule resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.isConstruct"></a>

```typescript
import { configOrganizationConfigRule } from '@cdktn/provider-awscc'

configOrganizationConfigRule.ConfigOrganizationConfigRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.isTerraformElement"></a>

```typescript
import { configOrganizationConfigRule } from '@cdktn/provider-awscc'

configOrganizationConfigRule.ConfigOrganizationConfigRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.isTerraformResource"></a>

```typescript
import { configOrganizationConfigRule } from '@cdktn/provider-awscc'

configOrganizationConfigRule.ConfigOrganizationConfigRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.generateConfigForImport"></a>

```typescript
import { configOrganizationConfigRule } from '@cdktn/provider-awscc'

configOrganizationConfigRule.ConfigOrganizationConfigRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ConfigOrganizationConfigRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ConfigOrganizationConfigRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ConfigOrganizationConfigRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ConfigOrganizationConfigRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.organizationConfigRuleArn">organizationConfigRuleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.organizationCustomPolicyRuleMetadata">organizationCustomPolicyRuleMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference">ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.organizationCustomRuleMetadata">organizationCustomRuleMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference">ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.organizationManagedRuleMetadata">organizationManagedRuleMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference">ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.excludedAccountsInput">excludedAccountsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.organizationConfigRuleNameInput">organizationConfigRuleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.organizationCustomPolicyRuleMetadataInput">organizationCustomPolicyRuleMetadataInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata">ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.organizationCustomRuleMetadataInput">organizationCustomRuleMetadataInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata">ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.organizationManagedRuleMetadataInput">organizationManagedRuleMetadataInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata">ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.excludedAccounts">excludedAccounts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.organizationConfigRuleName">organizationConfigRuleName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `organizationConfigRuleArn`<sup>Required</sup> <a name="organizationConfigRuleArn" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.organizationConfigRuleArn"></a>

```typescript
public readonly organizationConfigRuleArn: string;
```

- *Type:* string

---

##### `organizationCustomPolicyRuleMetadata`<sup>Required</sup> <a name="organizationCustomPolicyRuleMetadata" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.organizationCustomPolicyRuleMetadata"></a>

```typescript
public readonly organizationCustomPolicyRuleMetadata: ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference">ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference</a>

---

##### `organizationCustomRuleMetadata`<sup>Required</sup> <a name="organizationCustomRuleMetadata" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.organizationCustomRuleMetadata"></a>

```typescript
public readonly organizationCustomRuleMetadata: ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference">ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference</a>

---

##### `organizationManagedRuleMetadata`<sup>Required</sup> <a name="organizationManagedRuleMetadata" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.organizationManagedRuleMetadata"></a>

```typescript
public readonly organizationManagedRuleMetadata: ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference">ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference</a>

---

##### `excludedAccountsInput`<sup>Optional</sup> <a name="excludedAccountsInput" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.excludedAccountsInput"></a>

```typescript
public readonly excludedAccountsInput: string[];
```

- *Type:* string[]

---

##### `organizationConfigRuleNameInput`<sup>Optional</sup> <a name="organizationConfigRuleNameInput" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.organizationConfigRuleNameInput"></a>

```typescript
public readonly organizationConfigRuleNameInput: string;
```

- *Type:* string

---

##### `organizationCustomPolicyRuleMetadataInput`<sup>Optional</sup> <a name="organizationCustomPolicyRuleMetadataInput" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.organizationCustomPolicyRuleMetadataInput"></a>

```typescript
public readonly organizationCustomPolicyRuleMetadataInput: IResolvable | ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata">ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata</a>

---

##### `organizationCustomRuleMetadataInput`<sup>Optional</sup> <a name="organizationCustomRuleMetadataInput" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.organizationCustomRuleMetadataInput"></a>

```typescript
public readonly organizationCustomRuleMetadataInput: IResolvable | ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata">ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata</a>

---

##### `organizationManagedRuleMetadataInput`<sup>Optional</sup> <a name="organizationManagedRuleMetadataInput" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.organizationManagedRuleMetadataInput"></a>

```typescript
public readonly organizationManagedRuleMetadataInput: IResolvable | ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata">ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata</a>

---

##### `excludedAccounts`<sup>Required</sup> <a name="excludedAccounts" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.excludedAccounts"></a>

```typescript
public readonly excludedAccounts: string[];
```

- *Type:* string[]

---

##### `organizationConfigRuleName`<sup>Required</sup> <a name="organizationConfigRuleName" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.organizationConfigRuleName"></a>

```typescript
public readonly organizationConfigRuleName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ConfigOrganizationConfigRuleConfig <a name="ConfigOrganizationConfigRuleConfig" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleConfig.Initializer"></a>

```typescript
import { configOrganizationConfigRule } from '@cdktn/provider-awscc'

const configOrganizationConfigRuleConfig: configOrganizationConfigRule.ConfigOrganizationConfigRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleConfig.property.organizationConfigRuleName">organizationConfigRuleName</a></code> | <code>string</code> | The name that you assign to an organization AWS Config rule. Required. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleConfig.property.excludedAccounts">excludedAccounts</a></code> | <code>string[]</code> | A comma-separated list of accounts that you want to exclude from an organization AWS Config rule. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleConfig.property.organizationCustomPolicyRuleMetadata">organizationCustomPolicyRuleMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata">ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata</a></code> | This object specifies metadata for your organization's AWS Config Custom Policy rule. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleConfig.property.organizationCustomRuleMetadata">organizationCustomRuleMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata">ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata</a></code> | This object specifies organization custom rule metadata such as resource type, resource ID of AWS resource, Lambda function ARN, and organization trigger types that trigger AWS Config to evaluate your AWS resources against a rule. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleConfig.property.organizationManagedRuleMetadata">organizationManagedRuleMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata">ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata</a></code> | This object specifies organization managed rule metadata such as resource type and ID of AWS resource along with the rule identifier. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `organizationConfigRuleName`<sup>Required</sup> <a name="organizationConfigRuleName" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleConfig.property.organizationConfigRuleName"></a>

```typescript
public readonly organizationConfigRuleName: string;
```

- *Type:* string

The name that you assign to an organization AWS Config rule. Required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#organization_config_rule_name ConfigOrganizationConfigRule#organization_config_rule_name}

---

##### `excludedAccounts`<sup>Optional</sup> <a name="excludedAccounts" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleConfig.property.excludedAccounts"></a>

```typescript
public readonly excludedAccounts: string[];
```

- *Type:* string[]

A comma-separated list of accounts that you want to exclude from an organization AWS Config rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#excluded_accounts ConfigOrganizationConfigRule#excluded_accounts}

---

##### `organizationCustomPolicyRuleMetadata`<sup>Optional</sup> <a name="organizationCustomPolicyRuleMetadata" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleConfig.property.organizationCustomPolicyRuleMetadata"></a>

```typescript
public readonly organizationCustomPolicyRuleMetadata: ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata;
```

- *Type:* <a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata">ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata</a>

This object specifies metadata for your organization's AWS Config Custom Policy rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#organization_custom_policy_rule_metadata ConfigOrganizationConfigRule#organization_custom_policy_rule_metadata}

---

##### `organizationCustomRuleMetadata`<sup>Optional</sup> <a name="organizationCustomRuleMetadata" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleConfig.property.organizationCustomRuleMetadata"></a>

```typescript
public readonly organizationCustomRuleMetadata: ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata;
```

- *Type:* <a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata">ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata</a>

This object specifies organization custom rule metadata such as resource type, resource ID of AWS resource, Lambda function ARN, and organization trigger types that trigger AWS Config to evaluate your AWS resources against a rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#organization_custom_rule_metadata ConfigOrganizationConfigRule#organization_custom_rule_metadata}

---

##### `organizationManagedRuleMetadata`<sup>Optional</sup> <a name="organizationManagedRuleMetadata" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleConfig.property.organizationManagedRuleMetadata"></a>

```typescript
public readonly organizationManagedRuleMetadata: ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata;
```

- *Type:* <a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata">ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata</a>

This object specifies organization managed rule metadata such as resource type and ID of AWS resource along with the rule identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#organization_managed_rule_metadata ConfigOrganizationConfigRule#organization_managed_rule_metadata}

---

### ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata <a name="ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata.Initializer"></a>

```typescript
import { configOrganizationConfigRule } from '@cdktn/provider-awscc'

const configOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata: configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata.property.debugLogDeliveryAccounts">debugLogDeliveryAccounts</a></code> | <code>string[]</code> | A list of accounts that you can enable debug logging for your organization AWS Config Custom Policy rule. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata.property.description">description</a></code> | <code>string</code> | The description that you provide for your organization AWS Config rule. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata.property.inputParameters">inputParameters</a></code> | <code>string</code> | A string, in JSON format, that is passed to your organization AWS Config Custom Policy rule. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata.property.organizationConfigRuleTriggerTypes">organizationConfigRuleTriggerTypes</a></code> | <code>string[]</code> | The type of notification that initiates AWS Config to run an evaluation for a rule. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata.property.policyText">policyText</a></code> | <code>string</code> | The policy definition containing the logic for your organization AWS Config Custom Policy rule. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata.property.resourceIdScope">resourceIdScope</a></code> | <code>string</code> | The ID of the AWS resource that was evaluated. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata.property.resourceTypesScope">resourceTypesScope</a></code> | <code>string[]</code> | The type of the AWS resource that was evaluated. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata.property.runtime">runtime</a></code> | <code>string</code> | The runtime system for your organization AWS Config Custom Policy rules. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata.property.tagKeyScope">tagKeyScope</a></code> | <code>string</code> | One part of a key-value pair that make up a tag. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata.property.tagValueScope">tagValueScope</a></code> | <code>string</code> | The optional part of a key-value pair that make up a tag. |

---

##### `debugLogDeliveryAccounts`<sup>Optional</sup> <a name="debugLogDeliveryAccounts" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata.property.debugLogDeliveryAccounts"></a>

```typescript
public readonly debugLogDeliveryAccounts: string[];
```

- *Type:* string[]

A list of accounts that you can enable debug logging for your organization AWS Config Custom Policy rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#debug_log_delivery_accounts ConfigOrganizationConfigRule#debug_log_delivery_accounts}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description that you provide for your organization AWS Config rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#description ConfigOrganizationConfigRule#description}

---

##### `inputParameters`<sup>Optional</sup> <a name="inputParameters" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata.property.inputParameters"></a>

```typescript
public readonly inputParameters: string;
```

- *Type:* string

A string, in JSON format, that is passed to your organization AWS Config Custom Policy rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#input_parameters ConfigOrganizationConfigRule#input_parameters}

---

##### `organizationConfigRuleTriggerTypes`<sup>Optional</sup> <a name="organizationConfigRuleTriggerTypes" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata.property.organizationConfigRuleTriggerTypes"></a>

```typescript
public readonly organizationConfigRuleTriggerTypes: string[];
```

- *Type:* string[]

The type of notification that initiates AWS Config to run an evaluation for a rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#organization_config_rule_trigger_types ConfigOrganizationConfigRule#organization_config_rule_trigger_types}

---

##### `policyText`<sup>Optional</sup> <a name="policyText" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata.property.policyText"></a>

```typescript
public readonly policyText: string;
```

- *Type:* string

The policy definition containing the logic for your organization AWS Config Custom Policy rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#policy_text ConfigOrganizationConfigRule#policy_text}

---

##### `resourceIdScope`<sup>Optional</sup> <a name="resourceIdScope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata.property.resourceIdScope"></a>

```typescript
public readonly resourceIdScope: string;
```

- *Type:* string

The ID of the AWS resource that was evaluated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#resource_id_scope ConfigOrganizationConfigRule#resource_id_scope}

---

##### `resourceTypesScope`<sup>Optional</sup> <a name="resourceTypesScope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata.property.resourceTypesScope"></a>

```typescript
public readonly resourceTypesScope: string[];
```

- *Type:* string[]

The type of the AWS resource that was evaluated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#resource_types_scope ConfigOrganizationConfigRule#resource_types_scope}

---

##### `runtime`<sup>Optional</sup> <a name="runtime" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata.property.runtime"></a>

```typescript
public readonly runtime: string;
```

- *Type:* string

The runtime system for your organization AWS Config Custom Policy rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#runtime ConfigOrganizationConfigRule#runtime}

---

##### `tagKeyScope`<sup>Optional</sup> <a name="tagKeyScope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata.property.tagKeyScope"></a>

```typescript
public readonly tagKeyScope: string;
```

- *Type:* string

One part of a key-value pair that make up a tag.

A key is a general label that acts like a category for more specific tag values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#tag_key_scope ConfigOrganizationConfigRule#tag_key_scope}

---

##### `tagValueScope`<sup>Optional</sup> <a name="tagValueScope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata.property.tagValueScope"></a>

```typescript
public readonly tagValueScope: string;
```

- *Type:* string

The optional part of a key-value pair that make up a tag.

A value acts as a descriptor within a tag category (key).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#tag_value_scope ConfigOrganizationConfigRule#tag_value_scope}

---

### ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata <a name="ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata.Initializer"></a>

```typescript
import { configOrganizationConfigRule } from '@cdktn/provider-awscc'

const configOrganizationConfigRuleOrganizationCustomRuleMetadata: configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata.property.description">description</a></code> | <code>string</code> | The description that you provide for your organization AWS Config rule. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata.property.inputParameters">inputParameters</a></code> | <code>string</code> | A string, in JSON format, that is passed to your organization AWS Config rule Lambda function. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata.property.lambdaFunctionArn">lambdaFunctionArn</a></code> | <code>string</code> | The lambda function ARN. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata.property.maximumExecutionFrequency">maximumExecutionFrequency</a></code> | <code>string</code> | The maximum frequency with which AWS Config runs evaluations for a rule.Allowed values: One_Hour \| Three_Hours \| Six_Hours \| Twelve_Hours \| TwentyFour_Hours. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata.property.organizationConfigRuleTriggerTypes">organizationConfigRuleTriggerTypes</a></code> | <code>string[]</code> | The type of notification that triggers AWS Config to run an evaluation for a rule. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata.property.resourceIdScope">resourceIdScope</a></code> | <code>string</code> | The ID of the AWS resource that was evaluated. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata.property.resourceTypesScope">resourceTypesScope</a></code> | <code>string[]</code> | The type of the AWS resource that was evaluated. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata.property.tagKeyScope">tagKeyScope</a></code> | <code>string</code> | One part of a key-value pair that make up a tag. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata.property.tagValueScope">tagValueScope</a></code> | <code>string</code> | The optional part of a key-value pair that make up a tag. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description that you provide for your organization AWS Config rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#description ConfigOrganizationConfigRule#description}

---

##### `inputParameters`<sup>Optional</sup> <a name="inputParameters" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata.property.inputParameters"></a>

```typescript
public readonly inputParameters: string;
```

- *Type:* string

A string, in JSON format, that is passed to your organization AWS Config rule Lambda function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#input_parameters ConfigOrganizationConfigRule#input_parameters}

---

##### `lambdaFunctionArn`<sup>Optional</sup> <a name="lambdaFunctionArn" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata.property.lambdaFunctionArn"></a>

```typescript
public readonly lambdaFunctionArn: string;
```

- *Type:* string

The lambda function ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#lambda_function_arn ConfigOrganizationConfigRule#lambda_function_arn}

---

##### `maximumExecutionFrequency`<sup>Optional</sup> <a name="maximumExecutionFrequency" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata.property.maximumExecutionFrequency"></a>

```typescript
public readonly maximumExecutionFrequency: string;
```

- *Type:* string

The maximum frequency with which AWS Config runs evaluations for a rule.Allowed values: One_Hour | Three_Hours | Six_Hours | Twelve_Hours | TwentyFour_Hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#maximum_execution_frequency ConfigOrganizationConfigRule#maximum_execution_frequency}

---

##### `organizationConfigRuleTriggerTypes`<sup>Optional</sup> <a name="organizationConfigRuleTriggerTypes" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata.property.organizationConfigRuleTriggerTypes"></a>

```typescript
public readonly organizationConfigRuleTriggerTypes: string[];
```

- *Type:* string[]

The type of notification that triggers AWS Config to run an evaluation for a rule.

You can specify the following notification types:

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#organization_config_rule_trigger_types ConfigOrganizationConfigRule#organization_config_rule_trigger_types}

---

##### `resourceIdScope`<sup>Optional</sup> <a name="resourceIdScope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata.property.resourceIdScope"></a>

```typescript
public readonly resourceIdScope: string;
```

- *Type:* string

The ID of the AWS resource that was evaluated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#resource_id_scope ConfigOrganizationConfigRule#resource_id_scope}

---

##### `resourceTypesScope`<sup>Optional</sup> <a name="resourceTypesScope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata.property.resourceTypesScope"></a>

```typescript
public readonly resourceTypesScope: string[];
```

- *Type:* string[]

The type of the AWS resource that was evaluated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#resource_types_scope ConfigOrganizationConfigRule#resource_types_scope}

---

##### `tagKeyScope`<sup>Optional</sup> <a name="tagKeyScope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata.property.tagKeyScope"></a>

```typescript
public readonly tagKeyScope: string;
```

- *Type:* string

One part of a key-value pair that make up a tag.

A key is a general label that acts like a category for more specific tag values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#tag_key_scope ConfigOrganizationConfigRule#tag_key_scope}

---

##### `tagValueScope`<sup>Optional</sup> <a name="tagValueScope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata.property.tagValueScope"></a>

```typescript
public readonly tagValueScope: string;
```

- *Type:* string

The optional part of a key-value pair that make up a tag.

A value acts as a descriptor within a tag category (key).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#tag_value_scope ConfigOrganizationConfigRule#tag_value_scope}

---

### ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata <a name="ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata.Initializer"></a>

```typescript
import { configOrganizationConfigRule } from '@cdktn/provider-awscc'

const configOrganizationConfigRuleOrganizationManagedRuleMetadata: configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata.property.description">description</a></code> | <code>string</code> | The description that you provide for your organization AWS Config rule. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata.property.inputParameters">inputParameters</a></code> | <code>string</code> | A string, in JSON format, that is passed to your organization AWS Config rule Lambda function. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata.property.maximumExecutionFrequency">maximumExecutionFrequency</a></code> | <code>string</code> | The maximum frequency with which AWS Config runs evaluations for a rule. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata.property.resourceIdScope">resourceIdScope</a></code> | <code>string</code> | The ID of the AWS resource that was evaluated. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata.property.resourceTypesScope">resourceTypesScope</a></code> | <code>string[]</code> | The type of the AWS resource that was evaluated. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata.property.ruleIdentifier">ruleIdentifier</a></code> | <code>string</code> | Required. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata.property.tagKeyScope">tagKeyScope</a></code> | <code>string</code> | One part of a key-value pair that make up a tag. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata.property.tagValueScope">tagValueScope</a></code> | <code>string</code> | The optional part of a key-value pair that make up a tag. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description that you provide for your organization AWS Config rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#description ConfigOrganizationConfigRule#description}

---

##### `inputParameters`<sup>Optional</sup> <a name="inputParameters" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata.property.inputParameters"></a>

```typescript
public readonly inputParameters: string;
```

- *Type:* string

A string, in JSON format, that is passed to your organization AWS Config rule Lambda function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#input_parameters ConfigOrganizationConfigRule#input_parameters}

---

##### `maximumExecutionFrequency`<sup>Optional</sup> <a name="maximumExecutionFrequency" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata.property.maximumExecutionFrequency"></a>

```typescript
public readonly maximumExecutionFrequency: string;
```

- *Type:* string

The maximum frequency with which AWS Config runs evaluations for a rule.

Valid Values: One_Hour | Three_Hours | Six_Hours | Twelve_Hours | TwentyFour_Hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#maximum_execution_frequency ConfigOrganizationConfigRule#maximum_execution_frequency}

---

##### `resourceIdScope`<sup>Optional</sup> <a name="resourceIdScope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata.property.resourceIdScope"></a>

```typescript
public readonly resourceIdScope: string;
```

- *Type:* string

The ID of the AWS resource that was evaluated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#resource_id_scope ConfigOrganizationConfigRule#resource_id_scope}

---

##### `resourceTypesScope`<sup>Optional</sup> <a name="resourceTypesScope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata.property.resourceTypesScope"></a>

```typescript
public readonly resourceTypesScope: string[];
```

- *Type:* string[]

The type of the AWS resource that was evaluated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#resource_types_scope ConfigOrganizationConfigRule#resource_types_scope}

---

##### `ruleIdentifier`<sup>Optional</sup> <a name="ruleIdentifier" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata.property.ruleIdentifier"></a>

```typescript
public readonly ruleIdentifier: string;
```

- *Type:* string

Required.

For organization config managed rules, a predefined identifier from a list. For example, IAM_PASSWORD_POLICY is a managed rule. 

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#rule_identifier ConfigOrganizationConfigRule#rule_identifier}

---

##### `tagKeyScope`<sup>Optional</sup> <a name="tagKeyScope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata.property.tagKeyScope"></a>

```typescript
public readonly tagKeyScope: string;
```

- *Type:* string

One part of a key-value pair that make up a tag.

A key is a general label that acts like a category for more specific tag values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#tag_key_scope ConfigOrganizationConfigRule#tag_key_scope}

---

##### `tagValueScope`<sup>Optional</sup> <a name="tagValueScope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata.property.tagValueScope"></a>

```typescript
public readonly tagValueScope: string;
```

- *Type:* string

The optional part of a key-value pair that make up a tag.

A value acts as a descriptor within a tag category (key).



Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#tag_value_scope ConfigOrganizationConfigRule#tag_value_scope}

---

## Classes <a name="Classes" id="Classes"></a>

### ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference <a name="ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.Initializer"></a>

```typescript
import { configOrganizationConfigRule } from '@cdktn/provider-awscc'

new configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.resetDebugLogDeliveryAccounts">resetDebugLogDeliveryAccounts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.resetInputParameters">resetInputParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.resetOrganizationConfigRuleTriggerTypes">resetOrganizationConfigRuleTriggerTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.resetPolicyText">resetPolicyText</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.resetResourceIdScope">resetResourceIdScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.resetResourceTypesScope">resetResourceTypesScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.resetRuntime">resetRuntime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.resetTagKeyScope">resetTagKeyScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.resetTagValueScope">resetTagValueScope</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDebugLogDeliveryAccounts` <a name="resetDebugLogDeliveryAccounts" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.resetDebugLogDeliveryAccounts"></a>

```typescript
public resetDebugLogDeliveryAccounts(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetInputParameters` <a name="resetInputParameters" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.resetInputParameters"></a>

```typescript
public resetInputParameters(): void
```

##### `resetOrganizationConfigRuleTriggerTypes` <a name="resetOrganizationConfigRuleTriggerTypes" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.resetOrganizationConfigRuleTriggerTypes"></a>

```typescript
public resetOrganizationConfigRuleTriggerTypes(): void
```

##### `resetPolicyText` <a name="resetPolicyText" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.resetPolicyText"></a>

```typescript
public resetPolicyText(): void
```

##### `resetResourceIdScope` <a name="resetResourceIdScope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.resetResourceIdScope"></a>

```typescript
public resetResourceIdScope(): void
```

##### `resetResourceTypesScope` <a name="resetResourceTypesScope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.resetResourceTypesScope"></a>

```typescript
public resetResourceTypesScope(): void
```

##### `resetRuntime` <a name="resetRuntime" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.resetRuntime"></a>

```typescript
public resetRuntime(): void
```

##### `resetTagKeyScope` <a name="resetTagKeyScope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.resetTagKeyScope"></a>

```typescript
public resetTagKeyScope(): void
```

##### `resetTagValueScope` <a name="resetTagValueScope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.resetTagValueScope"></a>

```typescript
public resetTagValueScope(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.debugLogDeliveryAccountsInput">debugLogDeliveryAccountsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.inputParametersInput">inputParametersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.organizationConfigRuleTriggerTypesInput">organizationConfigRuleTriggerTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.policyTextInput">policyTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.resourceIdScopeInput">resourceIdScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.resourceTypesScopeInput">resourceTypesScopeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.runtimeInput">runtimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.tagKeyScopeInput">tagKeyScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.tagValueScopeInput">tagValueScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.debugLogDeliveryAccounts">debugLogDeliveryAccounts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.inputParameters">inputParameters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.organizationConfigRuleTriggerTypes">organizationConfigRuleTriggerTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.policyText">policyText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.resourceIdScope">resourceIdScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.resourceTypesScope">resourceTypesScope</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.runtime">runtime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.tagKeyScope">tagKeyScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.tagValueScope">tagValueScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata">ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `debugLogDeliveryAccountsInput`<sup>Optional</sup> <a name="debugLogDeliveryAccountsInput" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.debugLogDeliveryAccountsInput"></a>

```typescript
public readonly debugLogDeliveryAccountsInput: string[];
```

- *Type:* string[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `inputParametersInput`<sup>Optional</sup> <a name="inputParametersInput" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.inputParametersInput"></a>

```typescript
public readonly inputParametersInput: string;
```

- *Type:* string

---

##### `organizationConfigRuleTriggerTypesInput`<sup>Optional</sup> <a name="organizationConfigRuleTriggerTypesInput" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.organizationConfigRuleTriggerTypesInput"></a>

```typescript
public readonly organizationConfigRuleTriggerTypesInput: string[];
```

- *Type:* string[]

---

##### `policyTextInput`<sup>Optional</sup> <a name="policyTextInput" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.policyTextInput"></a>

```typescript
public readonly policyTextInput: string;
```

- *Type:* string

---

##### `resourceIdScopeInput`<sup>Optional</sup> <a name="resourceIdScopeInput" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.resourceIdScopeInput"></a>

```typescript
public readonly resourceIdScopeInput: string;
```

- *Type:* string

---

##### `resourceTypesScopeInput`<sup>Optional</sup> <a name="resourceTypesScopeInput" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.resourceTypesScopeInput"></a>

```typescript
public readonly resourceTypesScopeInput: string[];
```

- *Type:* string[]

---

##### `runtimeInput`<sup>Optional</sup> <a name="runtimeInput" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.runtimeInput"></a>

```typescript
public readonly runtimeInput: string;
```

- *Type:* string

---

##### `tagKeyScopeInput`<sup>Optional</sup> <a name="tagKeyScopeInput" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.tagKeyScopeInput"></a>

```typescript
public readonly tagKeyScopeInput: string;
```

- *Type:* string

---

##### `tagValueScopeInput`<sup>Optional</sup> <a name="tagValueScopeInput" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.tagValueScopeInput"></a>

```typescript
public readonly tagValueScopeInput: string;
```

- *Type:* string

---

##### `debugLogDeliveryAccounts`<sup>Required</sup> <a name="debugLogDeliveryAccounts" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.debugLogDeliveryAccounts"></a>

```typescript
public readonly debugLogDeliveryAccounts: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `inputParameters`<sup>Required</sup> <a name="inputParameters" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.inputParameters"></a>

```typescript
public readonly inputParameters: string;
```

- *Type:* string

---

##### `organizationConfigRuleTriggerTypes`<sup>Required</sup> <a name="organizationConfigRuleTriggerTypes" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.organizationConfigRuleTriggerTypes"></a>

```typescript
public readonly organizationConfigRuleTriggerTypes: string[];
```

- *Type:* string[]

---

##### `policyText`<sup>Required</sup> <a name="policyText" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.policyText"></a>

```typescript
public readonly policyText: string;
```

- *Type:* string

---

##### `resourceIdScope`<sup>Required</sup> <a name="resourceIdScope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.resourceIdScope"></a>

```typescript
public readonly resourceIdScope: string;
```

- *Type:* string

---

##### `resourceTypesScope`<sup>Required</sup> <a name="resourceTypesScope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.resourceTypesScope"></a>

```typescript
public readonly resourceTypesScope: string[];
```

- *Type:* string[]

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.runtime"></a>

```typescript
public readonly runtime: string;
```

- *Type:* string

---

##### `tagKeyScope`<sup>Required</sup> <a name="tagKeyScope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.tagKeyScope"></a>

```typescript
public readonly tagKeyScope: string;
```

- *Type:* string

---

##### `tagValueScope`<sup>Required</sup> <a name="tagValueScope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.tagValueScope"></a>

```typescript
public readonly tagValueScope: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata">ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata</a>

---


### ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference <a name="ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.Initializer"></a>

```typescript
import { configOrganizationConfigRule } from '@cdktn/provider-awscc'

new configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.resetInputParameters">resetInputParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.resetLambdaFunctionArn">resetLambdaFunctionArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.resetMaximumExecutionFrequency">resetMaximumExecutionFrequency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.resetOrganizationConfigRuleTriggerTypes">resetOrganizationConfigRuleTriggerTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.resetResourceIdScope">resetResourceIdScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.resetResourceTypesScope">resetResourceTypesScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.resetTagKeyScope">resetTagKeyScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.resetTagValueScope">resetTagValueScope</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetInputParameters` <a name="resetInputParameters" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.resetInputParameters"></a>

```typescript
public resetInputParameters(): void
```

##### `resetLambdaFunctionArn` <a name="resetLambdaFunctionArn" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.resetLambdaFunctionArn"></a>

```typescript
public resetLambdaFunctionArn(): void
```

##### `resetMaximumExecutionFrequency` <a name="resetMaximumExecutionFrequency" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.resetMaximumExecutionFrequency"></a>

```typescript
public resetMaximumExecutionFrequency(): void
```

##### `resetOrganizationConfigRuleTriggerTypes` <a name="resetOrganizationConfigRuleTriggerTypes" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.resetOrganizationConfigRuleTriggerTypes"></a>

```typescript
public resetOrganizationConfigRuleTriggerTypes(): void
```

##### `resetResourceIdScope` <a name="resetResourceIdScope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.resetResourceIdScope"></a>

```typescript
public resetResourceIdScope(): void
```

##### `resetResourceTypesScope` <a name="resetResourceTypesScope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.resetResourceTypesScope"></a>

```typescript
public resetResourceTypesScope(): void
```

##### `resetTagKeyScope` <a name="resetTagKeyScope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.resetTagKeyScope"></a>

```typescript
public resetTagKeyScope(): void
```

##### `resetTagValueScope` <a name="resetTagValueScope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.resetTagValueScope"></a>

```typescript
public resetTagValueScope(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.inputParametersInput">inputParametersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.lambdaFunctionArnInput">lambdaFunctionArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.maximumExecutionFrequencyInput">maximumExecutionFrequencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.organizationConfigRuleTriggerTypesInput">organizationConfigRuleTriggerTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.resourceIdScopeInput">resourceIdScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.resourceTypesScopeInput">resourceTypesScopeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.tagKeyScopeInput">tagKeyScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.tagValueScopeInput">tagValueScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.inputParameters">inputParameters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.lambdaFunctionArn">lambdaFunctionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.maximumExecutionFrequency">maximumExecutionFrequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.organizationConfigRuleTriggerTypes">organizationConfigRuleTriggerTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.resourceIdScope">resourceIdScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.resourceTypesScope">resourceTypesScope</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.tagKeyScope">tagKeyScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.tagValueScope">tagValueScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata">ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `inputParametersInput`<sup>Optional</sup> <a name="inputParametersInput" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.inputParametersInput"></a>

```typescript
public readonly inputParametersInput: string;
```

- *Type:* string

---

##### `lambdaFunctionArnInput`<sup>Optional</sup> <a name="lambdaFunctionArnInput" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.lambdaFunctionArnInput"></a>

```typescript
public readonly lambdaFunctionArnInput: string;
```

- *Type:* string

---

##### `maximumExecutionFrequencyInput`<sup>Optional</sup> <a name="maximumExecutionFrequencyInput" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.maximumExecutionFrequencyInput"></a>

```typescript
public readonly maximumExecutionFrequencyInput: string;
```

- *Type:* string

---

##### `organizationConfigRuleTriggerTypesInput`<sup>Optional</sup> <a name="organizationConfigRuleTriggerTypesInput" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.organizationConfigRuleTriggerTypesInput"></a>

```typescript
public readonly organizationConfigRuleTriggerTypesInput: string[];
```

- *Type:* string[]

---

##### `resourceIdScopeInput`<sup>Optional</sup> <a name="resourceIdScopeInput" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.resourceIdScopeInput"></a>

```typescript
public readonly resourceIdScopeInput: string;
```

- *Type:* string

---

##### `resourceTypesScopeInput`<sup>Optional</sup> <a name="resourceTypesScopeInput" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.resourceTypesScopeInput"></a>

```typescript
public readonly resourceTypesScopeInput: string[];
```

- *Type:* string[]

---

##### `tagKeyScopeInput`<sup>Optional</sup> <a name="tagKeyScopeInput" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.tagKeyScopeInput"></a>

```typescript
public readonly tagKeyScopeInput: string;
```

- *Type:* string

---

##### `tagValueScopeInput`<sup>Optional</sup> <a name="tagValueScopeInput" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.tagValueScopeInput"></a>

```typescript
public readonly tagValueScopeInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `inputParameters`<sup>Required</sup> <a name="inputParameters" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.inputParameters"></a>

```typescript
public readonly inputParameters: string;
```

- *Type:* string

---

##### `lambdaFunctionArn`<sup>Required</sup> <a name="lambdaFunctionArn" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.lambdaFunctionArn"></a>

```typescript
public readonly lambdaFunctionArn: string;
```

- *Type:* string

---

##### `maximumExecutionFrequency`<sup>Required</sup> <a name="maximumExecutionFrequency" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.maximumExecutionFrequency"></a>

```typescript
public readonly maximumExecutionFrequency: string;
```

- *Type:* string

---

##### `organizationConfigRuleTriggerTypes`<sup>Required</sup> <a name="organizationConfigRuleTriggerTypes" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.organizationConfigRuleTriggerTypes"></a>

```typescript
public readonly organizationConfigRuleTriggerTypes: string[];
```

- *Type:* string[]

---

##### `resourceIdScope`<sup>Required</sup> <a name="resourceIdScope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.resourceIdScope"></a>

```typescript
public readonly resourceIdScope: string;
```

- *Type:* string

---

##### `resourceTypesScope`<sup>Required</sup> <a name="resourceTypesScope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.resourceTypesScope"></a>

```typescript
public readonly resourceTypesScope: string[];
```

- *Type:* string[]

---

##### `tagKeyScope`<sup>Required</sup> <a name="tagKeyScope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.tagKeyScope"></a>

```typescript
public readonly tagKeyScope: string;
```

- *Type:* string

---

##### `tagValueScope`<sup>Required</sup> <a name="tagValueScope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.tagValueScope"></a>

```typescript
public readonly tagValueScope: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata">ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata</a>

---


### ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference <a name="ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.Initializer"></a>

```typescript
import { configOrganizationConfigRule } from '@cdktn/provider-awscc'

new configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.resetInputParameters">resetInputParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.resetMaximumExecutionFrequency">resetMaximumExecutionFrequency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.resetResourceIdScope">resetResourceIdScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.resetResourceTypesScope">resetResourceTypesScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.resetRuleIdentifier">resetRuleIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.resetTagKeyScope">resetTagKeyScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.resetTagValueScope">resetTagValueScope</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetInputParameters` <a name="resetInputParameters" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.resetInputParameters"></a>

```typescript
public resetInputParameters(): void
```

##### `resetMaximumExecutionFrequency` <a name="resetMaximumExecutionFrequency" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.resetMaximumExecutionFrequency"></a>

```typescript
public resetMaximumExecutionFrequency(): void
```

##### `resetResourceIdScope` <a name="resetResourceIdScope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.resetResourceIdScope"></a>

```typescript
public resetResourceIdScope(): void
```

##### `resetResourceTypesScope` <a name="resetResourceTypesScope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.resetResourceTypesScope"></a>

```typescript
public resetResourceTypesScope(): void
```

##### `resetRuleIdentifier` <a name="resetRuleIdentifier" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.resetRuleIdentifier"></a>

```typescript
public resetRuleIdentifier(): void
```

##### `resetTagKeyScope` <a name="resetTagKeyScope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.resetTagKeyScope"></a>

```typescript
public resetTagKeyScope(): void
```

##### `resetTagValueScope` <a name="resetTagValueScope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.resetTagValueScope"></a>

```typescript
public resetTagValueScope(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.inputParametersInput">inputParametersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.maximumExecutionFrequencyInput">maximumExecutionFrequencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.resourceIdScopeInput">resourceIdScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.resourceTypesScopeInput">resourceTypesScopeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.ruleIdentifierInput">ruleIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.tagKeyScopeInput">tagKeyScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.tagValueScopeInput">tagValueScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.inputParameters">inputParameters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.maximumExecutionFrequency">maximumExecutionFrequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.resourceIdScope">resourceIdScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.resourceTypesScope">resourceTypesScope</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.ruleIdentifier">ruleIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.tagKeyScope">tagKeyScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.tagValueScope">tagValueScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata">ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `inputParametersInput`<sup>Optional</sup> <a name="inputParametersInput" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.inputParametersInput"></a>

```typescript
public readonly inputParametersInput: string;
```

- *Type:* string

---

##### `maximumExecutionFrequencyInput`<sup>Optional</sup> <a name="maximumExecutionFrequencyInput" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.maximumExecutionFrequencyInput"></a>

```typescript
public readonly maximumExecutionFrequencyInput: string;
```

- *Type:* string

---

##### `resourceIdScopeInput`<sup>Optional</sup> <a name="resourceIdScopeInput" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.resourceIdScopeInput"></a>

```typescript
public readonly resourceIdScopeInput: string;
```

- *Type:* string

---

##### `resourceTypesScopeInput`<sup>Optional</sup> <a name="resourceTypesScopeInput" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.resourceTypesScopeInput"></a>

```typescript
public readonly resourceTypesScopeInput: string[];
```

- *Type:* string[]

---

##### `ruleIdentifierInput`<sup>Optional</sup> <a name="ruleIdentifierInput" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.ruleIdentifierInput"></a>

```typescript
public readonly ruleIdentifierInput: string;
```

- *Type:* string

---

##### `tagKeyScopeInput`<sup>Optional</sup> <a name="tagKeyScopeInput" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.tagKeyScopeInput"></a>

```typescript
public readonly tagKeyScopeInput: string;
```

- *Type:* string

---

##### `tagValueScopeInput`<sup>Optional</sup> <a name="tagValueScopeInput" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.tagValueScopeInput"></a>

```typescript
public readonly tagValueScopeInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `inputParameters`<sup>Required</sup> <a name="inputParameters" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.inputParameters"></a>

```typescript
public readonly inputParameters: string;
```

- *Type:* string

---

##### `maximumExecutionFrequency`<sup>Required</sup> <a name="maximumExecutionFrequency" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.maximumExecutionFrequency"></a>

```typescript
public readonly maximumExecutionFrequency: string;
```

- *Type:* string

---

##### `resourceIdScope`<sup>Required</sup> <a name="resourceIdScope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.resourceIdScope"></a>

```typescript
public readonly resourceIdScope: string;
```

- *Type:* string

---

##### `resourceTypesScope`<sup>Required</sup> <a name="resourceTypesScope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.resourceTypesScope"></a>

```typescript
public readonly resourceTypesScope: string[];
```

- *Type:* string[]

---

##### `ruleIdentifier`<sup>Required</sup> <a name="ruleIdentifier" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.ruleIdentifier"></a>

```typescript
public readonly ruleIdentifier: string;
```

- *Type:* string

---

##### `tagKeyScope`<sup>Required</sup> <a name="tagKeyScope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.tagKeyScope"></a>

```typescript
public readonly tagKeyScope: string;
```

- *Type:* string

---

##### `tagValueScope`<sup>Required</sup> <a name="tagValueScope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.tagValueScope"></a>

```typescript
public readonly tagValueScope: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata">ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata</a>

---



