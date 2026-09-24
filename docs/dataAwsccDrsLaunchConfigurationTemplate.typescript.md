# `dataAwsccDrsLaunchConfigurationTemplate` Submodule <a name="`dataAwsccDrsLaunchConfigurationTemplate` Submodule" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccDrsLaunchConfigurationTemplate <a name="DataAwsccDrsLaunchConfigurationTemplate" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/drs_launch_configuration_template awscc_drs_launch_configuration_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.Initializer"></a>

```typescript
import { dataAwsccDrsLaunchConfigurationTemplate } from '@cdktn/provider-awscc'

new dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate(scope: Construct, id: string, config: DataAwsccDrsLaunchConfigurationTemplateConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateConfig">DataAwsccDrsLaunchConfigurationTemplateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateConfig">DataAwsccDrsLaunchConfigurationTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccDrsLaunchConfigurationTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.isConstruct"></a>

```typescript
import { dataAwsccDrsLaunchConfigurationTemplate } from '@cdktn/provider-awscc'

dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.isTerraformElement"></a>

```typescript
import { dataAwsccDrsLaunchConfigurationTemplate } from '@cdktn/provider-awscc'

dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.isTerraformDataSource"></a>

```typescript
import { dataAwsccDrsLaunchConfigurationTemplate } from '@cdktn/provider-awscc'

dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.generateConfigForImport"></a>

```typescript
import { dataAwsccDrsLaunchConfigurationTemplate } from '@cdktn/provider-awscc'

dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccDrsLaunchConfigurationTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccDrsLaunchConfigurationTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccDrsLaunchConfigurationTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/drs_launch_configuration_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccDrsLaunchConfigurationTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.copyPrivateIp">copyPrivateIp</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.copyTags">copyTags</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.exportBucketArn">exportBucketArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.launchConfigurationTemplateId">launchConfigurationTemplateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.launchDisposition">launchDisposition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.launchIntoSourceInstance">launchIntoSourceInstance</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.licensing">licensing</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference">DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.postLaunchEnabled">postLaunchEnabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsList">DataAwsccDrsLaunchConfigurationTemplateTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.targetInstanceTypeRightSizingMethod">targetInstanceTypeRightSizingMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `copyPrivateIp`<sup>Required</sup> <a name="copyPrivateIp" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.copyPrivateIp"></a>

```typescript
public readonly copyPrivateIp: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `copyTags`<sup>Required</sup> <a name="copyTags" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.copyTags"></a>

```typescript
public readonly copyTags: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `exportBucketArn`<sup>Required</sup> <a name="exportBucketArn" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.exportBucketArn"></a>

```typescript
public readonly exportBucketArn: string;
```

- *Type:* string

---

##### `launchConfigurationTemplateId`<sup>Required</sup> <a name="launchConfigurationTemplateId" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.launchConfigurationTemplateId"></a>

```typescript
public readonly launchConfigurationTemplateId: string;
```

- *Type:* string

---

##### `launchDisposition`<sup>Required</sup> <a name="launchDisposition" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.launchDisposition"></a>

```typescript
public readonly launchDisposition: string;
```

- *Type:* string

---

##### `launchIntoSourceInstance`<sup>Required</sup> <a name="launchIntoSourceInstance" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.launchIntoSourceInstance"></a>

```typescript
public readonly launchIntoSourceInstance: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `licensing`<sup>Required</sup> <a name="licensing" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.licensing"></a>

```typescript
public readonly licensing: DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference">DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference</a>

---

##### `postLaunchEnabled`<sup>Required</sup> <a name="postLaunchEnabled" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.postLaunchEnabled"></a>

```typescript
public readonly postLaunchEnabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.tags"></a>

```typescript
public readonly tags: DataAwsccDrsLaunchConfigurationTemplateTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsList">DataAwsccDrsLaunchConfigurationTemplateTagsList</a>

---

##### `targetInstanceTypeRightSizingMethod`<sup>Required</sup> <a name="targetInstanceTypeRightSizingMethod" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.targetInstanceTypeRightSizingMethod"></a>

```typescript
public readonly targetInstanceTypeRightSizingMethod: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplate.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccDrsLaunchConfigurationTemplateConfig <a name="DataAwsccDrsLaunchConfigurationTemplateConfig" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateConfig.Initializer"></a>

```typescript
import { dataAwsccDrsLaunchConfigurationTemplate } from '@cdktn/provider-awscc'

const dataAwsccDrsLaunchConfigurationTemplateConfig: dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/drs_launch_configuration_template#id DataAwsccDrsLaunchConfigurationTemplate#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccDrsLaunchConfigurationTemplateLicensing <a name="DataAwsccDrsLaunchConfigurationTemplateLicensing" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensing"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensing.Initializer"></a>

```typescript
import { dataAwsccDrsLaunchConfigurationTemplate } from '@cdktn/provider-awscc'

const dataAwsccDrsLaunchConfigurationTemplateLicensing: dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensing = { ... }
```


### DataAwsccDrsLaunchConfigurationTemplateTags <a name="DataAwsccDrsLaunchConfigurationTemplateTags" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTags.Initializer"></a>

```typescript
import { dataAwsccDrsLaunchConfigurationTemplate } from '@cdktn/provider-awscc'

const dataAwsccDrsLaunchConfigurationTemplateTags: dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference <a name="DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.Initializer"></a>

```typescript
import { dataAwsccDrsLaunchConfigurationTemplate } from '@cdktn/provider-awscc'

new dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.property.osByol">osByol</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensing">DataAwsccDrsLaunchConfigurationTemplateLicensing</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `osByol`<sup>Required</sup> <a name="osByol" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.property.osByol"></a>

```typescript
public readonly osByol: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDrsLaunchConfigurationTemplateLicensing;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateLicensing">DataAwsccDrsLaunchConfigurationTemplateLicensing</a>

---


### DataAwsccDrsLaunchConfigurationTemplateTagsList <a name="DataAwsccDrsLaunchConfigurationTemplateTagsList" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsList.Initializer"></a>

```typescript
import { dataAwsccDrsLaunchConfigurationTemplate } from '@cdktn/provider-awscc'

new dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsList.get"></a>

```typescript
public get(index: number): DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference <a name="DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccDrsLaunchConfigurationTemplate } from '@cdktn/provider-awscc'

new dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTags">DataAwsccDrsLaunchConfigurationTemplateTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDrsLaunchConfigurationTemplateTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDrsLaunchConfigurationTemplate.DataAwsccDrsLaunchConfigurationTemplateTags">DataAwsccDrsLaunchConfigurationTemplateTags</a>

---



