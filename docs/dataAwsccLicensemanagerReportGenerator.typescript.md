# `dataAwsccLicensemanagerReportGenerator` Submodule <a name="`dataAwsccLicensemanagerReportGenerator` Submodule" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccLicensemanagerReportGenerator <a name="DataAwsccLicensemanagerReportGenerator" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/licensemanager_report_generator awscc_licensemanager_report_generator}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.Initializer"></a>

```typescript
import { dataAwsccLicensemanagerReportGenerator } from '@cdktn/provider-awscc'

new dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator(scope: Construct, id: string, config: DataAwsccLicensemanagerReportGeneratorConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorConfig">DataAwsccLicensemanagerReportGeneratorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorConfig">DataAwsccLicensemanagerReportGeneratorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccLicensemanagerReportGenerator resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.isConstruct"></a>

```typescript
import { dataAwsccLicensemanagerReportGenerator } from '@cdktn/provider-awscc'

dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.isTerraformElement"></a>

```typescript
import { dataAwsccLicensemanagerReportGenerator } from '@cdktn/provider-awscc'

dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.isTerraformDataSource"></a>

```typescript
import { dataAwsccLicensemanagerReportGenerator } from '@cdktn/provider-awscc'

dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.generateConfigForImport"></a>

```typescript
import { dataAwsccLicensemanagerReportGenerator } from '@cdktn/provider-awscc'

dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccLicensemanagerReportGenerator resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccLicensemanagerReportGenerator to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccLicensemanagerReportGenerator that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/licensemanager_report_generator#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccLicensemanagerReportGenerator to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.property.reportContext">reportContext</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportContextOutputReference">DataAwsccLicensemanagerReportGeneratorReportContextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.property.reportCreatorAccount">reportCreatorAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.property.reportFrequency">reportFrequency</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportFrequencyOutputReference">DataAwsccLicensemanagerReportGeneratorReportFrequencyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.property.reportGeneratorName">reportGeneratorName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.property.reportType">reportType</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.property.s3Location">s3Location</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorS3LocationOutputReference">DataAwsccLicensemanagerReportGeneratorS3LocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorTagsList">DataAwsccLicensemanagerReportGeneratorTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `reportContext`<sup>Required</sup> <a name="reportContext" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.property.reportContext"></a>

```typescript
public readonly reportContext: DataAwsccLicensemanagerReportGeneratorReportContextOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportContextOutputReference">DataAwsccLicensemanagerReportGeneratorReportContextOutputReference</a>

---

##### `reportCreatorAccount`<sup>Required</sup> <a name="reportCreatorAccount" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.property.reportCreatorAccount"></a>

```typescript
public readonly reportCreatorAccount: string;
```

- *Type:* string

---

##### `reportFrequency`<sup>Required</sup> <a name="reportFrequency" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.property.reportFrequency"></a>

```typescript
public readonly reportFrequency: DataAwsccLicensemanagerReportGeneratorReportFrequencyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportFrequencyOutputReference">DataAwsccLicensemanagerReportGeneratorReportFrequencyOutputReference</a>

---

##### `reportGeneratorName`<sup>Required</sup> <a name="reportGeneratorName" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.property.reportGeneratorName"></a>

```typescript
public readonly reportGeneratorName: string;
```

- *Type:* string

---

##### `reportType`<sup>Required</sup> <a name="reportType" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.property.reportType"></a>

```typescript
public readonly reportType: string[];
```

- *Type:* string[]

---

##### `s3Location`<sup>Required</sup> <a name="s3Location" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.property.s3Location"></a>

```typescript
public readonly s3Location: DataAwsccLicensemanagerReportGeneratorS3LocationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorS3LocationOutputReference">DataAwsccLicensemanagerReportGeneratorS3LocationOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.property.tags"></a>

```typescript
public readonly tags: DataAwsccLicensemanagerReportGeneratorTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorTagsList">DataAwsccLicensemanagerReportGeneratorTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGenerator.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccLicensemanagerReportGeneratorConfig <a name="DataAwsccLicensemanagerReportGeneratorConfig" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorConfig.Initializer"></a>

```typescript
import { dataAwsccLicensemanagerReportGenerator } from '@cdktn/provider-awscc'

const dataAwsccLicensemanagerReportGeneratorConfig: dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/licensemanager_report_generator#id DataAwsccLicensemanagerReportGenerator#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccLicensemanagerReportGeneratorReportContext <a name="DataAwsccLicensemanagerReportGeneratorReportContext" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportContext"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportContext.Initializer"></a>

```typescript
import { dataAwsccLicensemanagerReportGenerator } from '@cdktn/provider-awscc'

const dataAwsccLicensemanagerReportGeneratorReportContext: dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportContext = { ... }
```


### DataAwsccLicensemanagerReportGeneratorReportFrequency <a name="DataAwsccLicensemanagerReportGeneratorReportFrequency" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportFrequency"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportFrequency.Initializer"></a>

```typescript
import { dataAwsccLicensemanagerReportGenerator } from '@cdktn/provider-awscc'

const dataAwsccLicensemanagerReportGeneratorReportFrequency: dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportFrequency = { ... }
```


### DataAwsccLicensemanagerReportGeneratorS3Location <a name="DataAwsccLicensemanagerReportGeneratorS3Location" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorS3Location.Initializer"></a>

```typescript
import { dataAwsccLicensemanagerReportGenerator } from '@cdktn/provider-awscc'

const dataAwsccLicensemanagerReportGeneratorS3Location: dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorS3Location = { ... }
```


### DataAwsccLicensemanagerReportGeneratorTags <a name="DataAwsccLicensemanagerReportGeneratorTags" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorTags.Initializer"></a>

```typescript
import { dataAwsccLicensemanagerReportGenerator } from '@cdktn/provider-awscc'

const dataAwsccLicensemanagerReportGeneratorTags: dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccLicensemanagerReportGeneratorReportContextOutputReference <a name="DataAwsccLicensemanagerReportGeneratorReportContextOutputReference" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportContextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportContextOutputReference.Initializer"></a>

```typescript
import { dataAwsccLicensemanagerReportGenerator } from '@cdktn/provider-awscc'

new dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportContextOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportContextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportContextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportContextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportContextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportContextOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportContextOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportContextOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportContextOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportContextOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportContextOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportContextOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportContextOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportContextOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportContextOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportContextOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportContextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportContextOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportContextOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportContextOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportContextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportContextOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportContextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportContextOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportContextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportContextOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportContextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportContextOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportContextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportContextOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportContextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportContextOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportContextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportContextOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportContextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportContextOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportContextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportContextOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportContextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportContextOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportContextOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportContextOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportContextOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportContextOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportContextOutputReference.property.licenseAssetGroupArns">licenseAssetGroupArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportContextOutputReference.property.licenseConfigurationArns">licenseConfigurationArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportContextOutputReference.property.reportEndDate">reportEndDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportContextOutputReference.property.reportStartDate">reportStartDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportContextOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportContext">DataAwsccLicensemanagerReportGeneratorReportContext</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportContextOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportContextOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `licenseAssetGroupArns`<sup>Required</sup> <a name="licenseAssetGroupArns" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportContextOutputReference.property.licenseAssetGroupArns"></a>

```typescript
public readonly licenseAssetGroupArns: string[];
```

- *Type:* string[]

---

##### `licenseConfigurationArns`<sup>Required</sup> <a name="licenseConfigurationArns" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportContextOutputReference.property.licenseConfigurationArns"></a>

```typescript
public readonly licenseConfigurationArns: string[];
```

- *Type:* string[]

---

##### `reportEndDate`<sup>Required</sup> <a name="reportEndDate" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportContextOutputReference.property.reportEndDate"></a>

```typescript
public readonly reportEndDate: string;
```

- *Type:* string

---

##### `reportStartDate`<sup>Required</sup> <a name="reportStartDate" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportContextOutputReference.property.reportStartDate"></a>

```typescript
public readonly reportStartDate: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportContextOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLicensemanagerReportGeneratorReportContext;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportContext">DataAwsccLicensemanagerReportGeneratorReportContext</a>

---


### DataAwsccLicensemanagerReportGeneratorReportFrequencyOutputReference <a name="DataAwsccLicensemanagerReportGeneratorReportFrequencyOutputReference" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportFrequencyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportFrequencyOutputReference.Initializer"></a>

```typescript
import { dataAwsccLicensemanagerReportGenerator } from '@cdktn/provider-awscc'

new dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportFrequencyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportFrequencyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportFrequencyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportFrequencyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportFrequencyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportFrequencyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportFrequencyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportFrequencyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportFrequencyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportFrequencyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportFrequencyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportFrequencyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportFrequencyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportFrequencyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportFrequencyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportFrequencyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportFrequencyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportFrequencyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportFrequencyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportFrequencyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportFrequencyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportFrequencyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportFrequencyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportFrequencyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportFrequencyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportFrequencyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportFrequencyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportFrequencyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportFrequencyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportFrequencyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportFrequencyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportFrequencyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportFrequencyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportFrequencyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportFrequencyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportFrequencyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportFrequencyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportFrequencyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportFrequencyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportFrequencyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportFrequencyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportFrequencyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportFrequencyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportFrequencyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportFrequencyOutputReference.property.period">period</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportFrequencyOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportFrequencyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportFrequency">DataAwsccLicensemanagerReportGeneratorReportFrequency</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportFrequencyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportFrequencyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportFrequencyOutputReference.property.period"></a>

```typescript
public readonly period: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportFrequencyOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportFrequencyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLicensemanagerReportGeneratorReportFrequency;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorReportFrequency">DataAwsccLicensemanagerReportGeneratorReportFrequency</a>

---


### DataAwsccLicensemanagerReportGeneratorS3LocationOutputReference <a name="DataAwsccLicensemanagerReportGeneratorS3LocationOutputReference" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorS3LocationOutputReference.Initializer"></a>

```typescript
import { dataAwsccLicensemanagerReportGenerator } from '@cdktn/provider-awscc'

new dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorS3LocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorS3LocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorS3LocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorS3LocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorS3LocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorS3LocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorS3LocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorS3LocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorS3LocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorS3LocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorS3LocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorS3LocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorS3LocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorS3LocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorS3LocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorS3LocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorS3LocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorS3LocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorS3LocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorS3LocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorS3LocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorS3LocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorS3LocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorS3LocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorS3LocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorS3LocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorS3LocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorS3LocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorS3LocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorS3LocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorS3LocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorS3LocationOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorS3LocationOutputReference.property.keyPrefix">keyPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorS3LocationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorS3Location">DataAwsccLicensemanagerReportGeneratorS3Location</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorS3LocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorS3LocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorS3LocationOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `keyPrefix`<sup>Required</sup> <a name="keyPrefix" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorS3LocationOutputReference.property.keyPrefix"></a>

```typescript
public readonly keyPrefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorS3LocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLicensemanagerReportGeneratorS3Location;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorS3Location">DataAwsccLicensemanagerReportGeneratorS3Location</a>

---


### DataAwsccLicensemanagerReportGeneratorTagsList <a name="DataAwsccLicensemanagerReportGeneratorTagsList" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorTagsList.Initializer"></a>

```typescript
import { dataAwsccLicensemanagerReportGenerator } from '@cdktn/provider-awscc'

new dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorTagsList.get"></a>

```typescript
public get(index: number): DataAwsccLicensemanagerReportGeneratorTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccLicensemanagerReportGeneratorTagsOutputReference <a name="DataAwsccLicensemanagerReportGeneratorTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccLicensemanagerReportGenerator } from '@cdktn/provider-awscc'

new dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorTags">DataAwsccLicensemanagerReportGeneratorTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLicensemanagerReportGeneratorTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerReportGenerator.DataAwsccLicensemanagerReportGeneratorTags">DataAwsccLicensemanagerReportGeneratorTags</a>

---



