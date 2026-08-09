# `smsvoiceProtectConfiguration` Submodule <a name="`smsvoiceProtectConfiguration` Submodule" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SmsvoiceProtectConfiguration <a name="SmsvoiceProtectConfiguration" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/smsvoice_protect_configuration awscc_smsvoice_protect_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.Initializer"></a>

```typescript
import { smsvoiceProtectConfiguration } from '@cdktn/provider-awscc'

new smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration(scope: Construct, id: string, config?: SmsvoiceProtectConfigurationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationConfig">SmsvoiceProtectConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationConfig">SmsvoiceProtectConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.putCountryRuleSet">putCountryRuleSet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.resetCountryRuleSet">resetCountryRuleSet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.resetDeletionProtectionEnabled">resetDeletionProtectionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCountryRuleSet` <a name="putCountryRuleSet" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.putCountryRuleSet"></a>

```typescript
public putCountryRuleSet(value: SmsvoiceProtectConfigurationCountryRuleSet): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.putCountryRuleSet.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSet">SmsvoiceProtectConfigurationCountryRuleSet</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.putTags"></a>

```typescript
public putTags(value: IResolvable | SmsvoiceProtectConfigurationTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTags">SmsvoiceProtectConfigurationTags</a>[]

---

##### `resetCountryRuleSet` <a name="resetCountryRuleSet" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.resetCountryRuleSet"></a>

```typescript
public resetCountryRuleSet(): void
```

##### `resetDeletionProtectionEnabled` <a name="resetDeletionProtectionEnabled" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.resetDeletionProtectionEnabled"></a>

```typescript
public resetDeletionProtectionEnabled(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SmsvoiceProtectConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.isConstruct"></a>

```typescript
import { smsvoiceProtectConfiguration } from '@cdktn/provider-awscc'

smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.isTerraformElement"></a>

```typescript
import { smsvoiceProtectConfiguration } from '@cdktn/provider-awscc'

smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.isTerraformResource"></a>

```typescript
import { smsvoiceProtectConfiguration } from '@cdktn/provider-awscc'

smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.generateConfigForImport"></a>

```typescript
import { smsvoiceProtectConfiguration } from '@cdktn/provider-awscc'

smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a SmsvoiceProtectConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SmsvoiceProtectConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SmsvoiceProtectConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/smsvoice_protect_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SmsvoiceProtectConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.countryRuleSet">countryRuleSet</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference">SmsvoiceProtectConfigurationCountryRuleSetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.protectConfigurationId">protectConfigurationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsList">SmsvoiceProtectConfigurationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.countryRuleSetInput">countryRuleSetInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSet">SmsvoiceProtectConfigurationCountryRuleSet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.deletionProtectionEnabledInput">deletionProtectionEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTags">SmsvoiceProtectConfigurationTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.deletionProtectionEnabled">deletionProtectionEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `countryRuleSet`<sup>Required</sup> <a name="countryRuleSet" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.countryRuleSet"></a>

```typescript
public readonly countryRuleSet: SmsvoiceProtectConfigurationCountryRuleSetOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference">SmsvoiceProtectConfigurationCountryRuleSetOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `protectConfigurationId`<sup>Required</sup> <a name="protectConfigurationId" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.protectConfigurationId"></a>

```typescript
public readonly protectConfigurationId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.tags"></a>

```typescript
public readonly tags: SmsvoiceProtectConfigurationTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsList">SmsvoiceProtectConfigurationTagsList</a>

---

##### `countryRuleSetInput`<sup>Optional</sup> <a name="countryRuleSetInput" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.countryRuleSetInput"></a>

```typescript
public readonly countryRuleSetInput: IResolvable | SmsvoiceProtectConfigurationCountryRuleSet;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSet">SmsvoiceProtectConfigurationCountryRuleSet</a>

---

##### `deletionProtectionEnabledInput`<sup>Optional</sup> <a name="deletionProtectionEnabledInput" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.deletionProtectionEnabledInput"></a>

```typescript
public readonly deletionProtectionEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | SmsvoiceProtectConfigurationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTags">SmsvoiceProtectConfigurationTags</a>[]

---

##### `deletionProtectionEnabled`<sup>Required</sup> <a name="deletionProtectionEnabled" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.deletionProtectionEnabled"></a>

```typescript
public readonly deletionProtectionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SmsvoiceProtectConfigurationConfig <a name="SmsvoiceProtectConfigurationConfig" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationConfig.Initializer"></a>

```typescript
import { smsvoiceProtectConfiguration } from '@cdktn/provider-awscc'

const smsvoiceProtectConfigurationConfig: smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationConfig.property.countryRuleSet">countryRuleSet</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSet">SmsvoiceProtectConfigurationCountryRuleSet</a></code> | An array of CountryRule containing the rules for the NumberCapability. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationConfig.property.deletionProtectionEnabled">deletionProtectionEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | When set to true deletion protection is enabled and protect configuration cannot be deleted. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTags">SmsvoiceProtectConfigurationTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `countryRuleSet`<sup>Optional</sup> <a name="countryRuleSet" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationConfig.property.countryRuleSet"></a>

```typescript
public readonly countryRuleSet: SmsvoiceProtectConfigurationCountryRuleSet;
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSet">SmsvoiceProtectConfigurationCountryRuleSet</a>

An array of CountryRule containing the rules for the NumberCapability.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/smsvoice_protect_configuration#country_rule_set SmsvoiceProtectConfiguration#country_rule_set}

---

##### `deletionProtectionEnabled`<sup>Optional</sup> <a name="deletionProtectionEnabled" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationConfig.property.deletionProtectionEnabled"></a>

```typescript
public readonly deletionProtectionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

When set to true deletion protection is enabled and protect configuration cannot be deleted.

By default this is set to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/smsvoice_protect_configuration#deletion_protection_enabled SmsvoiceProtectConfiguration#deletion_protection_enabled}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | SmsvoiceProtectConfigurationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTags">SmsvoiceProtectConfigurationTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/smsvoice_protect_configuration#tags SmsvoiceProtectConfiguration#tags}

---

### SmsvoiceProtectConfigurationCountryRuleSet <a name="SmsvoiceProtectConfigurationCountryRuleSet" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSet"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSet.Initializer"></a>

```typescript
import { smsvoiceProtectConfiguration } from '@cdktn/provider-awscc'

const smsvoiceProtectConfigurationCountryRuleSet: smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSet = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSet.property.mms">mms</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMms">SmsvoiceProtectConfigurationCountryRuleSetMms</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/smsvoice_protect_configuration#mms SmsvoiceProtectConfiguration#mms}. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSet.property.sms">sms</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSms">SmsvoiceProtectConfigurationCountryRuleSetSms</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/smsvoice_protect_configuration#sms SmsvoiceProtectConfiguration#sms}. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSet.property.voice">voice</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoice">SmsvoiceProtectConfigurationCountryRuleSetVoice</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/smsvoice_protect_configuration#voice SmsvoiceProtectConfiguration#voice}. |

---

##### `mms`<sup>Optional</sup> <a name="mms" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSet.property.mms"></a>

```typescript
public readonly mms: IResolvable | SmsvoiceProtectConfigurationCountryRuleSetMms[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMms">SmsvoiceProtectConfigurationCountryRuleSetMms</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/smsvoice_protect_configuration#mms SmsvoiceProtectConfiguration#mms}.

---

##### `sms`<sup>Optional</sup> <a name="sms" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSet.property.sms"></a>

```typescript
public readonly sms: IResolvable | SmsvoiceProtectConfigurationCountryRuleSetSms[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSms">SmsvoiceProtectConfigurationCountryRuleSetSms</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/smsvoice_protect_configuration#sms SmsvoiceProtectConfiguration#sms}.

---

##### `voice`<sup>Optional</sup> <a name="voice" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSet.property.voice"></a>

```typescript
public readonly voice: IResolvable | SmsvoiceProtectConfigurationCountryRuleSetVoice[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoice">SmsvoiceProtectConfigurationCountryRuleSetVoice</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/smsvoice_protect_configuration#voice SmsvoiceProtectConfiguration#voice}.

---

### SmsvoiceProtectConfigurationCountryRuleSetMms <a name="SmsvoiceProtectConfigurationCountryRuleSetMms" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMms.Initializer"></a>

```typescript
import { smsvoiceProtectConfiguration } from '@cdktn/provider-awscc'

const smsvoiceProtectConfigurationCountryRuleSetMms: smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMms = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMms.property.countryCode">countryCode</a></code> | <code>string</code> | The two-letter ISO country code. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMms.property.protectStatus">protectStatus</a></code> | <code>string</code> | The types of protection that can be used. |

---

##### `countryCode`<sup>Optional</sup> <a name="countryCode" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMms.property.countryCode"></a>

```typescript
public readonly countryCode: string;
```

- *Type:* string

The two-letter ISO country code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/smsvoice_protect_configuration#country_code SmsvoiceProtectConfiguration#country_code}

---

##### `protectStatus`<sup>Optional</sup> <a name="protectStatus" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMms.property.protectStatus"></a>

```typescript
public readonly protectStatus: string;
```

- *Type:* string

The types of protection that can be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/smsvoice_protect_configuration#protect_status SmsvoiceProtectConfiguration#protect_status}

---

### SmsvoiceProtectConfigurationCountryRuleSetSms <a name="SmsvoiceProtectConfigurationCountryRuleSetSms" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSms.Initializer"></a>

```typescript
import { smsvoiceProtectConfiguration } from '@cdktn/provider-awscc'

const smsvoiceProtectConfigurationCountryRuleSetSms: smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSms = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSms.property.countryCode">countryCode</a></code> | <code>string</code> | The two-letter ISO country code. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSms.property.protectStatus">protectStatus</a></code> | <code>string</code> | The types of protection that can be used. |

---

##### `countryCode`<sup>Optional</sup> <a name="countryCode" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSms.property.countryCode"></a>

```typescript
public readonly countryCode: string;
```

- *Type:* string

The two-letter ISO country code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/smsvoice_protect_configuration#country_code SmsvoiceProtectConfiguration#country_code}

---

##### `protectStatus`<sup>Optional</sup> <a name="protectStatus" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSms.property.protectStatus"></a>

```typescript
public readonly protectStatus: string;
```

- *Type:* string

The types of protection that can be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/smsvoice_protect_configuration#protect_status SmsvoiceProtectConfiguration#protect_status}

---

### SmsvoiceProtectConfigurationCountryRuleSetVoice <a name="SmsvoiceProtectConfigurationCountryRuleSetVoice" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoice"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoice.Initializer"></a>

```typescript
import { smsvoiceProtectConfiguration } from '@cdktn/provider-awscc'

const smsvoiceProtectConfigurationCountryRuleSetVoice: smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoice = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoice.property.countryCode">countryCode</a></code> | <code>string</code> | The two-letter ISO country code. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoice.property.protectStatus">protectStatus</a></code> | <code>string</code> | The types of protection that can be used. |

---

##### `countryCode`<sup>Optional</sup> <a name="countryCode" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoice.property.countryCode"></a>

```typescript
public readonly countryCode: string;
```

- *Type:* string

The two-letter ISO country code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/smsvoice_protect_configuration#country_code SmsvoiceProtectConfiguration#country_code}

---

##### `protectStatus`<sup>Optional</sup> <a name="protectStatus" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoice.property.protectStatus"></a>

```typescript
public readonly protectStatus: string;
```

- *Type:* string

The types of protection that can be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/smsvoice_protect_configuration#protect_status SmsvoiceProtectConfiguration#protect_status}

---

### SmsvoiceProtectConfigurationTags <a name="SmsvoiceProtectConfigurationTags" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTags.Initializer"></a>

```typescript
import { smsvoiceProtectConfiguration } from '@cdktn/provider-awscc'

const smsvoiceProtectConfigurationTags: smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/smsvoice_protect_configuration#key SmsvoiceProtectConfiguration#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/smsvoice_protect_configuration#value SmsvoiceProtectConfiguration#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SmsvoiceProtectConfigurationCountryRuleSetMmsList <a name="SmsvoiceProtectConfigurationCountryRuleSetMmsList" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsList.Initializer"></a>

```typescript
import { smsvoiceProtectConfiguration } from '@cdktn/provider-awscc'

new smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsList.get"></a>

```typescript
public get(index: number): SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMms">SmsvoiceProtectConfigurationCountryRuleSetMms</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SmsvoiceProtectConfigurationCountryRuleSetMms[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMms">SmsvoiceProtectConfigurationCountryRuleSetMms</a>[]

---


### SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference <a name="SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.Initializer"></a>

```typescript
import { smsvoiceProtectConfiguration } from '@cdktn/provider-awscc'

new smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.resetCountryCode">resetCountryCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.resetProtectStatus">resetProtectStatus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCountryCode` <a name="resetCountryCode" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.resetCountryCode"></a>

```typescript
public resetCountryCode(): void
```

##### `resetProtectStatus` <a name="resetProtectStatus" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.resetProtectStatus"></a>

```typescript
public resetProtectStatus(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.property.countryCodeInput">countryCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.property.protectStatusInput">protectStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.property.countryCode">countryCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.property.protectStatus">protectStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMms">SmsvoiceProtectConfigurationCountryRuleSetMms</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `countryCodeInput`<sup>Optional</sup> <a name="countryCodeInput" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.property.countryCodeInput"></a>

```typescript
public readonly countryCodeInput: string;
```

- *Type:* string

---

##### `protectStatusInput`<sup>Optional</sup> <a name="protectStatusInput" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.property.protectStatusInput"></a>

```typescript
public readonly protectStatusInput: string;
```

- *Type:* string

---

##### `countryCode`<sup>Required</sup> <a name="countryCode" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.property.countryCode"></a>

```typescript
public readonly countryCode: string;
```

- *Type:* string

---

##### `protectStatus`<sup>Required</sup> <a name="protectStatus" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.property.protectStatus"></a>

```typescript
public readonly protectStatus: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SmsvoiceProtectConfigurationCountryRuleSetMms;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMms">SmsvoiceProtectConfigurationCountryRuleSetMms</a>

---


### SmsvoiceProtectConfigurationCountryRuleSetOutputReference <a name="SmsvoiceProtectConfigurationCountryRuleSetOutputReference" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.Initializer"></a>

```typescript
import { smsvoiceProtectConfiguration } from '@cdktn/provider-awscc'

new smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.putMms">putMms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.putSms">putSms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.putVoice">putVoice</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.resetMms">resetMms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.resetSms">resetSms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.resetVoice">resetVoice</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMms` <a name="putMms" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.putMms"></a>

```typescript
public putMms(value: IResolvable | SmsvoiceProtectConfigurationCountryRuleSetMms[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.putMms.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMms">SmsvoiceProtectConfigurationCountryRuleSetMms</a>[]

---

##### `putSms` <a name="putSms" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.putSms"></a>

```typescript
public putSms(value: IResolvable | SmsvoiceProtectConfigurationCountryRuleSetSms[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.putSms.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSms">SmsvoiceProtectConfigurationCountryRuleSetSms</a>[]

---

##### `putVoice` <a name="putVoice" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.putVoice"></a>

```typescript
public putVoice(value: IResolvable | SmsvoiceProtectConfigurationCountryRuleSetVoice[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.putVoice.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoice">SmsvoiceProtectConfigurationCountryRuleSetVoice</a>[]

---

##### `resetMms` <a name="resetMms" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.resetMms"></a>

```typescript
public resetMms(): void
```

##### `resetSms` <a name="resetSms" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.resetSms"></a>

```typescript
public resetSms(): void
```

##### `resetVoice` <a name="resetVoice" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.resetVoice"></a>

```typescript
public resetVoice(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.property.mms">mms</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsList">SmsvoiceProtectConfigurationCountryRuleSetMmsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.property.sms">sms</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsList">SmsvoiceProtectConfigurationCountryRuleSetSmsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.property.voice">voice</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceList">SmsvoiceProtectConfigurationCountryRuleSetVoiceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.property.mmsInput">mmsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMms">SmsvoiceProtectConfigurationCountryRuleSetMms</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.property.smsInput">smsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSms">SmsvoiceProtectConfigurationCountryRuleSetSms</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.property.voiceInput">voiceInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoice">SmsvoiceProtectConfigurationCountryRuleSetVoice</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSet">SmsvoiceProtectConfigurationCountryRuleSet</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `mms`<sup>Required</sup> <a name="mms" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.property.mms"></a>

```typescript
public readonly mms: SmsvoiceProtectConfigurationCountryRuleSetMmsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsList">SmsvoiceProtectConfigurationCountryRuleSetMmsList</a>

---

##### `sms`<sup>Required</sup> <a name="sms" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.property.sms"></a>

```typescript
public readonly sms: SmsvoiceProtectConfigurationCountryRuleSetSmsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsList">SmsvoiceProtectConfigurationCountryRuleSetSmsList</a>

---

##### `voice`<sup>Required</sup> <a name="voice" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.property.voice"></a>

```typescript
public readonly voice: SmsvoiceProtectConfigurationCountryRuleSetVoiceList;
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceList">SmsvoiceProtectConfigurationCountryRuleSetVoiceList</a>

---

##### `mmsInput`<sup>Optional</sup> <a name="mmsInput" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.property.mmsInput"></a>

```typescript
public readonly mmsInput: IResolvable | SmsvoiceProtectConfigurationCountryRuleSetMms[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMms">SmsvoiceProtectConfigurationCountryRuleSetMms</a>[]

---

##### `smsInput`<sup>Optional</sup> <a name="smsInput" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.property.smsInput"></a>

```typescript
public readonly smsInput: IResolvable | SmsvoiceProtectConfigurationCountryRuleSetSms[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSms">SmsvoiceProtectConfigurationCountryRuleSetSms</a>[]

---

##### `voiceInput`<sup>Optional</sup> <a name="voiceInput" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.property.voiceInput"></a>

```typescript
public readonly voiceInput: IResolvable | SmsvoiceProtectConfigurationCountryRuleSetVoice[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoice">SmsvoiceProtectConfigurationCountryRuleSetVoice</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SmsvoiceProtectConfigurationCountryRuleSet;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSet">SmsvoiceProtectConfigurationCountryRuleSet</a>

---


### SmsvoiceProtectConfigurationCountryRuleSetSmsList <a name="SmsvoiceProtectConfigurationCountryRuleSetSmsList" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsList.Initializer"></a>

```typescript
import { smsvoiceProtectConfiguration } from '@cdktn/provider-awscc'

new smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsList.get"></a>

```typescript
public get(index: number): SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSms">SmsvoiceProtectConfigurationCountryRuleSetSms</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SmsvoiceProtectConfigurationCountryRuleSetSms[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSms">SmsvoiceProtectConfigurationCountryRuleSetSms</a>[]

---


### SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference <a name="SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.Initializer"></a>

```typescript
import { smsvoiceProtectConfiguration } from '@cdktn/provider-awscc'

new smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.resetCountryCode">resetCountryCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.resetProtectStatus">resetProtectStatus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCountryCode` <a name="resetCountryCode" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.resetCountryCode"></a>

```typescript
public resetCountryCode(): void
```

##### `resetProtectStatus` <a name="resetProtectStatus" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.resetProtectStatus"></a>

```typescript
public resetProtectStatus(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.property.countryCodeInput">countryCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.property.protectStatusInput">protectStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.property.countryCode">countryCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.property.protectStatus">protectStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSms">SmsvoiceProtectConfigurationCountryRuleSetSms</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `countryCodeInput`<sup>Optional</sup> <a name="countryCodeInput" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.property.countryCodeInput"></a>

```typescript
public readonly countryCodeInput: string;
```

- *Type:* string

---

##### `protectStatusInput`<sup>Optional</sup> <a name="protectStatusInput" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.property.protectStatusInput"></a>

```typescript
public readonly protectStatusInput: string;
```

- *Type:* string

---

##### `countryCode`<sup>Required</sup> <a name="countryCode" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.property.countryCode"></a>

```typescript
public readonly countryCode: string;
```

- *Type:* string

---

##### `protectStatus`<sup>Required</sup> <a name="protectStatus" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.property.protectStatus"></a>

```typescript
public readonly protectStatus: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SmsvoiceProtectConfigurationCountryRuleSetSms;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSms">SmsvoiceProtectConfigurationCountryRuleSetSms</a>

---


### SmsvoiceProtectConfigurationCountryRuleSetVoiceList <a name="SmsvoiceProtectConfigurationCountryRuleSetVoiceList" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceList.Initializer"></a>

```typescript
import { smsvoiceProtectConfiguration } from '@cdktn/provider-awscc'

new smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceList.get"></a>

```typescript
public get(index: number): SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoice">SmsvoiceProtectConfigurationCountryRuleSetVoice</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SmsvoiceProtectConfigurationCountryRuleSetVoice[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoice">SmsvoiceProtectConfigurationCountryRuleSetVoice</a>[]

---


### SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference <a name="SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.Initializer"></a>

```typescript
import { smsvoiceProtectConfiguration } from '@cdktn/provider-awscc'

new smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.resetCountryCode">resetCountryCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.resetProtectStatus">resetProtectStatus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCountryCode` <a name="resetCountryCode" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.resetCountryCode"></a>

```typescript
public resetCountryCode(): void
```

##### `resetProtectStatus` <a name="resetProtectStatus" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.resetProtectStatus"></a>

```typescript
public resetProtectStatus(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.property.countryCodeInput">countryCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.property.protectStatusInput">protectStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.property.countryCode">countryCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.property.protectStatus">protectStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoice">SmsvoiceProtectConfigurationCountryRuleSetVoice</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `countryCodeInput`<sup>Optional</sup> <a name="countryCodeInput" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.property.countryCodeInput"></a>

```typescript
public readonly countryCodeInput: string;
```

- *Type:* string

---

##### `protectStatusInput`<sup>Optional</sup> <a name="protectStatusInput" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.property.protectStatusInput"></a>

```typescript
public readonly protectStatusInput: string;
```

- *Type:* string

---

##### `countryCode`<sup>Required</sup> <a name="countryCode" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.property.countryCode"></a>

```typescript
public readonly countryCode: string;
```

- *Type:* string

---

##### `protectStatus`<sup>Required</sup> <a name="protectStatus" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.property.protectStatus"></a>

```typescript
public readonly protectStatus: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SmsvoiceProtectConfigurationCountryRuleSetVoice;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoice">SmsvoiceProtectConfigurationCountryRuleSetVoice</a>

---


### SmsvoiceProtectConfigurationTagsList <a name="SmsvoiceProtectConfigurationTagsList" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsList.Initializer"></a>

```typescript
import { smsvoiceProtectConfiguration } from '@cdktn/provider-awscc'

new smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsList.get"></a>

```typescript
public get(index: number): SmsvoiceProtectConfigurationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTags">SmsvoiceProtectConfigurationTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SmsvoiceProtectConfigurationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTags">SmsvoiceProtectConfigurationTags</a>[]

---


### SmsvoiceProtectConfigurationTagsOutputReference <a name="SmsvoiceProtectConfigurationTagsOutputReference" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.Initializer"></a>

```typescript
import { smsvoiceProtectConfiguration } from '@cdktn/provider-awscc'

new smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTags">SmsvoiceProtectConfigurationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SmsvoiceProtectConfigurationTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTags">SmsvoiceProtectConfigurationTags</a>

---



