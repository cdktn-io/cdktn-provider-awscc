# `dataAwsccSsmDefaultHostManagementConfiguration` Submodule <a name="`dataAwsccSsmDefaultHostManagementConfiguration` Submodule" id="@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSsmDefaultHostManagementConfiguration <a name="DataAwsccSsmDefaultHostManagementConfiguration" id="@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/ssm_default_host_management_configuration awscc_ssm_default_host_management_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfiguration.Initializer"></a>

```typescript
import { dataAwsccSsmDefaultHostManagementConfiguration } from '@cdktn/provider-awscc'

new dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfiguration(scope: Construct, id: string, config: DataAwsccSsmDefaultHostManagementConfigurationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfigurationConfig">DataAwsccSsmDefaultHostManagementConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfigurationConfig">DataAwsccSsmDefaultHostManagementConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfiguration.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfiguration.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfiguration.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfiguration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfiguration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfiguration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfiguration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfiguration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfiguration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfiguration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfiguration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfiguration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfiguration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfiguration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfiguration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfiguration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfiguration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfiguration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfiguration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfiguration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfiguration.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccSsmDefaultHostManagementConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfiguration.isConstruct"></a>

```typescript
import { dataAwsccSsmDefaultHostManagementConfiguration } from '@cdktn/provider-awscc'

dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfiguration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfiguration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfiguration.isTerraformElement"></a>

```typescript
import { dataAwsccSsmDefaultHostManagementConfiguration } from '@cdktn/provider-awscc'

dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfiguration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfiguration.isTerraformDataSource"></a>

```typescript
import { dataAwsccSsmDefaultHostManagementConfiguration } from '@cdktn/provider-awscc'

dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfiguration.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfiguration.generateConfigForImport"></a>

```typescript
import { dataAwsccSsmDefaultHostManagementConfiguration } from '@cdktn/provider-awscc'

dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfiguration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccSsmDefaultHostManagementConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccSsmDefaultHostManagementConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccSsmDefaultHostManagementConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/ssm_default_host_management_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSsmDefaultHostManagementConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfiguration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfiguration.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfiguration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfiguration.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfiguration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfiguration.property.customerManagedRoleArn">customerManagedRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfiguration.property.lastModifiedDate">lastModifiedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfiguration.property.lastModifiedUser">lastModifiedUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfiguration.property.permissionModel">permissionModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfiguration.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfiguration.property.settingArn">settingArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfiguration.property.settingId">settingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfiguration.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfiguration.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfiguration.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfiguration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfiguration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfiguration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfiguration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfiguration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfiguration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfiguration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfiguration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfiguration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfiguration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfiguration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `customerManagedRoleArn`<sup>Required</sup> <a name="customerManagedRoleArn" id="@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfiguration.property.customerManagedRoleArn"></a>

```typescript
public readonly customerManagedRoleArn: string;
```

- *Type:* string

---

##### `lastModifiedDate`<sup>Required</sup> <a name="lastModifiedDate" id="@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfiguration.property.lastModifiedDate"></a>

```typescript
public readonly lastModifiedDate: string;
```

- *Type:* string

---

##### `lastModifiedUser`<sup>Required</sup> <a name="lastModifiedUser" id="@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfiguration.property.lastModifiedUser"></a>

```typescript
public readonly lastModifiedUser: string;
```

- *Type:* string

---

##### `permissionModel`<sup>Required</sup> <a name="permissionModel" id="@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfiguration.property.permissionModel"></a>

```typescript
public readonly permissionModel: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfiguration.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `settingArn`<sup>Required</sup> <a name="settingArn" id="@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfiguration.property.settingArn"></a>

```typescript
public readonly settingArn: string;
```

- *Type:* string

---

##### `settingId`<sup>Required</sup> <a name="settingId" id="@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfiguration.property.settingId"></a>

```typescript
public readonly settingId: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfiguration.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfiguration.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfiguration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfiguration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSsmDefaultHostManagementConfigurationConfig <a name="DataAwsccSsmDefaultHostManagementConfigurationConfig" id="@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfigurationConfig.Initializer"></a>

```typescript
import { dataAwsccSsmDefaultHostManagementConfiguration } from '@cdktn/provider-awscc'

const dataAwsccSsmDefaultHostManagementConfigurationConfig: dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfigurationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfigurationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfigurationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfigurationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfigurationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfigurationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfigurationConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfigurationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfigurationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfigurationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfigurationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfigurationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfigurationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfigurationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSsmDefaultHostManagementConfiguration.DataAwsccSsmDefaultHostManagementConfigurationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/ssm_default_host_management_configuration#id DataAwsccSsmDefaultHostManagementConfiguration#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



