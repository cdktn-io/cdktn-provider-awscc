# `dataAwsccQbusinessWebExperience` Submodule <a name="`dataAwsccQbusinessWebExperience` Submodule" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccQbusinessWebExperience <a name="DataAwsccQbusinessWebExperience" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/qbusiness_web_experience awscc_qbusiness_web_experience}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.Initializer"></a>

```typescript
import { dataAwsccQbusinessWebExperience } from '@cdktn/provider-awscc'

new dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience(scope: Construct, id: string, config: DataAwsccQbusinessWebExperienceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceConfig">DataAwsccQbusinessWebExperienceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceConfig">DataAwsccQbusinessWebExperienceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccQbusinessWebExperience resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.isConstruct"></a>

```typescript
import { dataAwsccQbusinessWebExperience } from '@cdktn/provider-awscc'

dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.isTerraformElement"></a>

```typescript
import { dataAwsccQbusinessWebExperience } from '@cdktn/provider-awscc'

dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.isTerraformDataSource"></a>

```typescript
import { dataAwsccQbusinessWebExperience } from '@cdktn/provider-awscc'

dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.generateConfigForImport"></a>

```typescript
import { dataAwsccQbusinessWebExperience } from '@cdktn/provider-awscc'

dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccQbusinessWebExperience resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccQbusinessWebExperience to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccQbusinessWebExperience that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/qbusiness_web_experience#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccQbusinessWebExperience to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.applicationId">applicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.browserExtensionConfiguration">browserExtensionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceBrowserExtensionConfigurationOutputReference">DataAwsccQbusinessWebExperienceBrowserExtensionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.customizationConfiguration">customizationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference">DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.defaultEndpoint">defaultEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.identityProviderConfiguration">identityProviderConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference">DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.origins">origins</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.samplePromptsControlMode">samplePromptsControlMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.subtitle">subtitle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsList">DataAwsccQbusinessWebExperienceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.webExperienceArn">webExperienceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.webExperienceId">webExperienceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.welcomeMessage">welcomeMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

---

##### `browserExtensionConfiguration`<sup>Required</sup> <a name="browserExtensionConfiguration" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.browserExtensionConfiguration"></a>

```typescript
public readonly browserExtensionConfiguration: DataAwsccQbusinessWebExperienceBrowserExtensionConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceBrowserExtensionConfigurationOutputReference">DataAwsccQbusinessWebExperienceBrowserExtensionConfigurationOutputReference</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `customizationConfiguration`<sup>Required</sup> <a name="customizationConfiguration" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.customizationConfiguration"></a>

```typescript
public readonly customizationConfiguration: DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference">DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference</a>

---

##### `defaultEndpoint`<sup>Required</sup> <a name="defaultEndpoint" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.defaultEndpoint"></a>

```typescript
public readonly defaultEndpoint: string;
```

- *Type:* string

---

##### `identityProviderConfiguration`<sup>Required</sup> <a name="identityProviderConfiguration" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.identityProviderConfiguration"></a>

```typescript
public readonly identityProviderConfiguration: DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference">DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference</a>

---

##### `origins`<sup>Required</sup> <a name="origins" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.origins"></a>

```typescript
public readonly origins: string[];
```

- *Type:* string[]

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `samplePromptsControlMode`<sup>Required</sup> <a name="samplePromptsControlMode" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.samplePromptsControlMode"></a>

```typescript
public readonly samplePromptsControlMode: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `subtitle`<sup>Required</sup> <a name="subtitle" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.subtitle"></a>

```typescript
public readonly subtitle: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.tags"></a>

```typescript
public readonly tags: DataAwsccQbusinessWebExperienceTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsList">DataAwsccQbusinessWebExperienceTagsList</a>

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `webExperienceArn`<sup>Required</sup> <a name="webExperienceArn" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.webExperienceArn"></a>

```typescript
public readonly webExperienceArn: string;
```

- *Type:* string

---

##### `webExperienceId`<sup>Required</sup> <a name="webExperienceId" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.webExperienceId"></a>

```typescript
public readonly webExperienceId: string;
```

- *Type:* string

---

##### `welcomeMessage`<sup>Required</sup> <a name="welcomeMessage" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.welcomeMessage"></a>

```typescript
public readonly welcomeMessage: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccQbusinessWebExperienceBrowserExtensionConfiguration <a name="DataAwsccQbusinessWebExperienceBrowserExtensionConfiguration" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceBrowserExtensionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceBrowserExtensionConfiguration.Initializer"></a>

```typescript
import { dataAwsccQbusinessWebExperience } from '@cdktn/provider-awscc'

const dataAwsccQbusinessWebExperienceBrowserExtensionConfiguration: dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceBrowserExtensionConfiguration = { ... }
```


### DataAwsccQbusinessWebExperienceConfig <a name="DataAwsccQbusinessWebExperienceConfig" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceConfig.Initializer"></a>

```typescript
import { dataAwsccQbusinessWebExperience } from '@cdktn/provider-awscc'

const dataAwsccQbusinessWebExperienceConfig: dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/qbusiness_web_experience#id DataAwsccQbusinessWebExperience#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccQbusinessWebExperienceCustomizationConfiguration <a name="DataAwsccQbusinessWebExperienceCustomizationConfiguration" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfiguration.Initializer"></a>

```typescript
import { dataAwsccQbusinessWebExperience } from '@cdktn/provider-awscc'

const dataAwsccQbusinessWebExperienceCustomizationConfiguration: dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfiguration = { ... }
```


### DataAwsccQbusinessWebExperienceIdentityProviderConfiguration <a name="DataAwsccQbusinessWebExperienceIdentityProviderConfiguration" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfiguration.Initializer"></a>

```typescript
import { dataAwsccQbusinessWebExperience } from '@cdktn/provider-awscc'

const dataAwsccQbusinessWebExperienceIdentityProviderConfiguration: dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfiguration = { ... }
```


### DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration <a name="DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration.Initializer"></a>

```typescript
import { dataAwsccQbusinessWebExperience } from '@cdktn/provider-awscc'

const dataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration: dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration = { ... }
```


### DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfiguration <a name="DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfiguration" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfiguration.Initializer"></a>

```typescript
import { dataAwsccQbusinessWebExperience } from '@cdktn/provider-awscc'

const dataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfiguration: dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfiguration = { ... }
```


### DataAwsccQbusinessWebExperienceTags <a name="DataAwsccQbusinessWebExperienceTags" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTags.Initializer"></a>

```typescript
import { dataAwsccQbusinessWebExperience } from '@cdktn/provider-awscc'

const dataAwsccQbusinessWebExperienceTags: dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccQbusinessWebExperienceBrowserExtensionConfigurationOutputReference <a name="DataAwsccQbusinessWebExperienceBrowserExtensionConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceBrowserExtensionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceBrowserExtensionConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccQbusinessWebExperience } from '@cdktn/provider-awscc'

new dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceBrowserExtensionConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceBrowserExtensionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceBrowserExtensionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceBrowserExtensionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceBrowserExtensionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceBrowserExtensionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceBrowserExtensionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceBrowserExtensionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceBrowserExtensionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceBrowserExtensionConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceBrowserExtensionConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceBrowserExtensionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceBrowserExtensionConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceBrowserExtensionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceBrowserExtensionConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceBrowserExtensionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceBrowserExtensionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceBrowserExtensionConfigurationOutputReference.property.enabledBrowserExtensions">enabledBrowserExtensions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceBrowserExtensionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceBrowserExtensionConfiguration">DataAwsccQbusinessWebExperienceBrowserExtensionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceBrowserExtensionConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceBrowserExtensionConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledBrowserExtensions`<sup>Required</sup> <a name="enabledBrowserExtensions" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceBrowserExtensionConfigurationOutputReference.property.enabledBrowserExtensions"></a>

```typescript
public readonly enabledBrowserExtensions: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceBrowserExtensionConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccQbusinessWebExperienceBrowserExtensionConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceBrowserExtensionConfiguration">DataAwsccQbusinessWebExperienceBrowserExtensionConfiguration</a>

---


### DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference <a name="DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccQbusinessWebExperience } from '@cdktn/provider-awscc'

new dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference.property.customCssUrl">customCssUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference.property.faviconUrl">faviconUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference.property.fontUrl">fontUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference.property.logoUrl">logoUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfiguration">DataAwsccQbusinessWebExperienceCustomizationConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customCssUrl`<sup>Required</sup> <a name="customCssUrl" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference.property.customCssUrl"></a>

```typescript
public readonly customCssUrl: string;
```

- *Type:* string

---

##### `faviconUrl`<sup>Required</sup> <a name="faviconUrl" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference.property.faviconUrl"></a>

```typescript
public readonly faviconUrl: string;
```

- *Type:* string

---

##### `fontUrl`<sup>Required</sup> <a name="fontUrl" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference.property.fontUrl"></a>

```typescript
public readonly fontUrl: string;
```

- *Type:* string

---

##### `logoUrl`<sup>Required</sup> <a name="logoUrl" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference.property.logoUrl"></a>

```typescript
public readonly logoUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccQbusinessWebExperienceCustomizationConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfiguration">DataAwsccQbusinessWebExperienceCustomizationConfiguration</a>

---


### DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference <a name="DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccQbusinessWebExperience } from '@cdktn/provider-awscc'

new dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.property.secretsArn">secretsArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.property.secretsRole">secretsRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration">DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `secretsArn`<sup>Required</sup> <a name="secretsArn" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.property.secretsArn"></a>

```typescript
public readonly secretsArn: string;
```

- *Type:* string

---

##### `secretsRole`<sup>Required</sup> <a name="secretsRole" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.property.secretsRole"></a>

```typescript
public readonly secretsRole: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration">DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration</a>

---


### DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference <a name="DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccQbusinessWebExperience } from '@cdktn/provider-awscc'

new dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference.property.openIdConnectConfiguration">openIdConnectConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference">DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference.property.samlConfiguration">samlConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference">DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfiguration">DataAwsccQbusinessWebExperienceIdentityProviderConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `openIdConnectConfiguration`<sup>Required</sup> <a name="openIdConnectConfiguration" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference.property.openIdConnectConfiguration"></a>

```typescript
public readonly openIdConnectConfiguration: DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference">DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference</a>

---

##### `samlConfiguration`<sup>Required</sup> <a name="samlConfiguration" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference.property.samlConfiguration"></a>

```typescript
public readonly samlConfiguration: DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference">DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccQbusinessWebExperienceIdentityProviderConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfiguration">DataAwsccQbusinessWebExperienceIdentityProviderConfiguration</a>

---


### DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference <a name="DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccQbusinessWebExperience } from '@cdktn/provider-awscc'

new dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.property.authenticationUrl">authenticationUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfiguration">DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authenticationUrl`<sup>Required</sup> <a name="authenticationUrl" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.property.authenticationUrl"></a>

```typescript
public readonly authenticationUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfiguration">DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfiguration</a>

---


### DataAwsccQbusinessWebExperienceTagsList <a name="DataAwsccQbusinessWebExperienceTagsList" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsList.Initializer"></a>

```typescript
import { dataAwsccQbusinessWebExperience } from '@cdktn/provider-awscc'

new dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsList.get"></a>

```typescript
public get(index: number): DataAwsccQbusinessWebExperienceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccQbusinessWebExperienceTagsOutputReference <a name="DataAwsccQbusinessWebExperienceTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccQbusinessWebExperience } from '@cdktn/provider-awscc'

new dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTags">DataAwsccQbusinessWebExperienceTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccQbusinessWebExperienceTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTags">DataAwsccQbusinessWebExperienceTags</a>

---



