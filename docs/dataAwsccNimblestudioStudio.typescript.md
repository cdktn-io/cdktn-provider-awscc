# `dataAwsccNimblestudioStudio` Submodule <a name="`dataAwsccNimblestudioStudio` Submodule" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccNimblestudioStudio <a name="DataAwsccNimblestudioStudio" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/nimblestudio_studio awscc_nimblestudio_studio}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.Initializer"></a>

```typescript
import { dataAwsccNimblestudioStudio } from '@cdktn/provider-awscc'

new dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio(scope: Construct, id: string, config: DataAwsccNimblestudioStudioConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioConfig">DataAwsccNimblestudioStudioConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioConfig">DataAwsccNimblestudioStudioConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccNimblestudioStudio resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.isConstruct"></a>

```typescript
import { dataAwsccNimblestudioStudio } from '@cdktn/provider-awscc'

dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.isTerraformElement"></a>

```typescript
import { dataAwsccNimblestudioStudio } from '@cdktn/provider-awscc'

dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.isTerraformDataSource"></a>

```typescript
import { dataAwsccNimblestudioStudio } from '@cdktn/provider-awscc'

dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.generateConfigForImport"></a>

```typescript
import { dataAwsccNimblestudioStudio } from '@cdktn/provider-awscc'

dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccNimblestudioStudio resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccNimblestudioStudio to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccNimblestudioStudio that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/nimblestudio_studio#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccNimblestudioStudio to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.adminRoleArn">adminRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.homeRegion">homeRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.ssoClientId">ssoClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.studioEncryptionConfiguration">studioEncryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference">DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.studioId">studioId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.studioName">studioName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.studioUrl">studioUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.tags">tags</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.userRoleArn">userRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `adminRoleArn`<sup>Required</sup> <a name="adminRoleArn" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.adminRoleArn"></a>

```typescript
public readonly adminRoleArn: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `homeRegion`<sup>Required</sup> <a name="homeRegion" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.homeRegion"></a>

```typescript
public readonly homeRegion: string;
```

- *Type:* string

---

##### `ssoClientId`<sup>Required</sup> <a name="ssoClientId" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.ssoClientId"></a>

```typescript
public readonly ssoClientId: string;
```

- *Type:* string

---

##### `studioEncryptionConfiguration`<sup>Required</sup> <a name="studioEncryptionConfiguration" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.studioEncryptionConfiguration"></a>

```typescript
public readonly studioEncryptionConfiguration: DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference">DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference</a>

---

##### `studioId`<sup>Required</sup> <a name="studioId" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.studioId"></a>

```typescript
public readonly studioId: string;
```

- *Type:* string

---

##### `studioName`<sup>Required</sup> <a name="studioName" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.studioName"></a>

```typescript
public readonly studioName: string;
```

- *Type:* string

---

##### `studioUrl`<sup>Required</sup> <a name="studioUrl" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.studioUrl"></a>

```typescript
public readonly studioUrl: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.tags"></a>

```typescript
public readonly tags: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `userRoleArn`<sup>Required</sup> <a name="userRoleArn" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.userRoleArn"></a>

```typescript
public readonly userRoleArn: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccNimblestudioStudioConfig <a name="DataAwsccNimblestudioStudioConfig" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioConfig.Initializer"></a>

```typescript
import { dataAwsccNimblestudioStudio } from '@cdktn/provider-awscc'

const dataAwsccNimblestudioStudioConfig: dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/nimblestudio_studio#id DataAwsccNimblestudioStudio#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccNimblestudioStudioStudioEncryptionConfiguration <a name="DataAwsccNimblestudioStudioStudioEncryptionConfiguration" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfiguration.Initializer"></a>

```typescript
import { dataAwsccNimblestudioStudio } from '@cdktn/provider-awscc'

const dataAwsccNimblestudioStudioStudioEncryptionConfiguration: dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfiguration = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference <a name="DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccNimblestudioStudio } from '@cdktn/provider-awscc'

new dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.property.keyArn">keyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.property.keyType">keyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfiguration">DataAwsccNimblestudioStudioStudioEncryptionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyArn`<sup>Required</sup> <a name="keyArn" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.property.keyArn"></a>

```typescript
public readonly keyArn: string;
```

- *Type:* string

---

##### `keyType`<sup>Required</sup> <a name="keyType" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.property.keyType"></a>

```typescript
public readonly keyType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccNimblestudioStudioStudioEncryptionConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfiguration">DataAwsccNimblestudioStudioStudioEncryptionConfiguration</a>

---



