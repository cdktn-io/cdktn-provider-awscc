# `dataAwsccSmsvoiceProtectConfiguration` Submodule <a name="`dataAwsccSmsvoiceProtectConfiguration` Submodule" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSmsvoiceProtectConfiguration <a name="DataAwsccSmsvoiceProtectConfiguration" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/smsvoice_protect_configuration awscc_smsvoice_protect_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.Initializer"></a>

```typescript
import { dataAwsccSmsvoiceProtectConfiguration } from '@cdktn/provider-awscc'

new dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration(scope: Construct, id: string, config: DataAwsccSmsvoiceProtectConfigurationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationConfig">DataAwsccSmsvoiceProtectConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationConfig">DataAwsccSmsvoiceProtectConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccSmsvoiceProtectConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.isConstruct"></a>

```typescript
import { dataAwsccSmsvoiceProtectConfiguration } from '@cdktn/provider-awscc'

dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.isTerraformElement"></a>

```typescript
import { dataAwsccSmsvoiceProtectConfiguration } from '@cdktn/provider-awscc'

dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.isTerraformDataSource"></a>

```typescript
import { dataAwsccSmsvoiceProtectConfiguration } from '@cdktn/provider-awscc'

dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.generateConfigForImport"></a>

```typescript
import { dataAwsccSmsvoiceProtectConfiguration } from '@cdktn/provider-awscc'

dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccSmsvoiceProtectConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccSmsvoiceProtectConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccSmsvoiceProtectConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/smsvoice_protect_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSmsvoiceProtectConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.property.countryRuleSet">countryRuleSet</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference">DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.property.deletionProtectionEnabled">deletionProtectionEnabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.property.protectConfigurationId">protectConfigurationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsList">DataAwsccSmsvoiceProtectConfigurationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `countryRuleSet`<sup>Required</sup> <a name="countryRuleSet" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.property.countryRuleSet"></a>

```typescript
public readonly countryRuleSet: DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference">DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference</a>

---

##### `deletionProtectionEnabled`<sup>Required</sup> <a name="deletionProtectionEnabled" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.property.deletionProtectionEnabled"></a>

```typescript
public readonly deletionProtectionEnabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `protectConfigurationId`<sup>Required</sup> <a name="protectConfigurationId" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.property.protectConfigurationId"></a>

```typescript
public readonly protectConfigurationId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.property.tags"></a>

```typescript
public readonly tags: DataAwsccSmsvoiceProtectConfigurationTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsList">DataAwsccSmsvoiceProtectConfigurationTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfiguration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSmsvoiceProtectConfigurationConfig <a name="DataAwsccSmsvoiceProtectConfigurationConfig" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationConfig.Initializer"></a>

```typescript
import { dataAwsccSmsvoiceProtectConfiguration } from '@cdktn/provider-awscc'

const dataAwsccSmsvoiceProtectConfigurationConfig: dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/smsvoice_protect_configuration#id DataAwsccSmsvoiceProtectConfiguration#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSmsvoiceProtectConfigurationCountryRuleSet <a name="DataAwsccSmsvoiceProtectConfigurationCountryRuleSet" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSet"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSet.Initializer"></a>

```typescript
import { dataAwsccSmsvoiceProtectConfiguration } from '@cdktn/provider-awscc'

const dataAwsccSmsvoiceProtectConfigurationCountryRuleSet: dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSet = { ... }
```


### DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMms <a name="DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMms" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMms.Initializer"></a>

```typescript
import { dataAwsccSmsvoiceProtectConfiguration } from '@cdktn/provider-awscc'

const dataAwsccSmsvoiceProtectConfigurationCountryRuleSetMms: dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMms = { ... }
```


### DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSms <a name="DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSms" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSms.Initializer"></a>

```typescript
import { dataAwsccSmsvoiceProtectConfiguration } from '@cdktn/provider-awscc'

const dataAwsccSmsvoiceProtectConfigurationCountryRuleSetSms: dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSms = { ... }
```


### DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoice <a name="DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoice" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoice"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoice.Initializer"></a>

```typescript
import { dataAwsccSmsvoiceProtectConfiguration } from '@cdktn/provider-awscc'

const dataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoice: dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoice = { ... }
```


### DataAwsccSmsvoiceProtectConfigurationTags <a name="DataAwsccSmsvoiceProtectConfigurationTags" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTags.Initializer"></a>

```typescript
import { dataAwsccSmsvoiceProtectConfiguration } from '@cdktn/provider-awscc'

const dataAwsccSmsvoiceProtectConfigurationTags: dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsList <a name="DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsList" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsList.Initializer"></a>

```typescript
import { dataAwsccSmsvoiceProtectConfiguration } from '@cdktn/provider-awscc'

new dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsList.get"></a>

```typescript
public get(index: number): DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference <a name="DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.Initializer"></a>

```typescript
import { dataAwsccSmsvoiceProtectConfiguration } from '@cdktn/provider-awscc'

new dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.property.countryCode">countryCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.property.protectStatus">protectStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMms">DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMms</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `countryCode`<sup>Required</sup> <a name="countryCode" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.property.countryCode"></a>

```typescript
public readonly countryCode: string;
```

- *Type:* string

---

##### `protectStatus`<sup>Required</sup> <a name="protectStatus" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.property.protectStatus"></a>

```typescript
public readonly protectStatus: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMms;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMms">DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMms</a>

---


### DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference <a name="DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference.Initializer"></a>

```typescript
import { dataAwsccSmsvoiceProtectConfiguration } from '@cdktn/provider-awscc'

new dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference.property.mms">mms</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsList">DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference.property.sms">sms</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsList">DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference.property.voice">voice</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceList">DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSet">DataAwsccSmsvoiceProtectConfigurationCountryRuleSet</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `mms`<sup>Required</sup> <a name="mms" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference.property.mms"></a>

```typescript
public readonly mms: DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsList">DataAwsccSmsvoiceProtectConfigurationCountryRuleSetMmsList</a>

---

##### `sms`<sup>Required</sup> <a name="sms" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference.property.sms"></a>

```typescript
public readonly sms: DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsList">DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsList</a>

---

##### `voice`<sup>Required</sup> <a name="voice" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference.property.voice"></a>

```typescript
public readonly voice: DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceList">DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSmsvoiceProtectConfigurationCountryRuleSet;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSet">DataAwsccSmsvoiceProtectConfigurationCountryRuleSet</a>

---


### DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsList <a name="DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsList" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsList.Initializer"></a>

```typescript
import { dataAwsccSmsvoiceProtectConfiguration } from '@cdktn/provider-awscc'

new dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsList.get"></a>

```typescript
public get(index: number): DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference <a name="DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.Initializer"></a>

```typescript
import { dataAwsccSmsvoiceProtectConfiguration } from '@cdktn/provider-awscc'

new dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.property.countryCode">countryCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.property.protectStatus">protectStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSms">DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSms</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `countryCode`<sup>Required</sup> <a name="countryCode" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.property.countryCode"></a>

```typescript
public readonly countryCode: string;
```

- *Type:* string

---

##### `protectStatus`<sup>Required</sup> <a name="protectStatus" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.property.protectStatus"></a>

```typescript
public readonly protectStatus: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSms;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSms">DataAwsccSmsvoiceProtectConfigurationCountryRuleSetSms</a>

---


### DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceList <a name="DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceList" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceList.Initializer"></a>

```typescript
import { dataAwsccSmsvoiceProtectConfiguration } from '@cdktn/provider-awscc'

new dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceList.get"></a>

```typescript
public get(index: number): DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference <a name="DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.Initializer"></a>

```typescript
import { dataAwsccSmsvoiceProtectConfiguration } from '@cdktn/provider-awscc'

new dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.property.countryCode">countryCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.property.protectStatus">protectStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoice">DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoice</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `countryCode`<sup>Required</sup> <a name="countryCode" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.property.countryCode"></a>

```typescript
public readonly countryCode: string;
```

- *Type:* string

---

##### `protectStatus`<sup>Required</sup> <a name="protectStatus" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.property.protectStatus"></a>

```typescript
public readonly protectStatus: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoice;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoice">DataAwsccSmsvoiceProtectConfigurationCountryRuleSetVoice</a>

---


### DataAwsccSmsvoiceProtectConfigurationTagsList <a name="DataAwsccSmsvoiceProtectConfigurationTagsList" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsList.Initializer"></a>

```typescript
import { dataAwsccSmsvoiceProtectConfiguration } from '@cdktn/provider-awscc'

new dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsList.get"></a>

```typescript
public get(index: number): DataAwsccSmsvoiceProtectConfigurationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccSmsvoiceProtectConfigurationTagsOutputReference <a name="DataAwsccSmsvoiceProtectConfigurationTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccSmsvoiceProtectConfiguration } from '@cdktn/provider-awscc'

new dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTags">DataAwsccSmsvoiceProtectConfigurationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSmsvoiceProtectConfigurationTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceProtectConfiguration.DataAwsccSmsvoiceProtectConfigurationTags">DataAwsccSmsvoiceProtectConfigurationTags</a>

---



