# `dataAwsccNimblestudioLaunchProfile` Submodule <a name="`dataAwsccNimblestudioLaunchProfile` Submodule" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccNimblestudioLaunchProfile <a name="DataAwsccNimblestudioLaunchProfile" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/nimblestudio_launch_profile awscc_nimblestudio_launch_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.Initializer"></a>

```typescript
import { dataAwsccNimblestudioLaunchProfile } from '@cdktn/provider-awscc'

new dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile(scope: Construct, id: string, config: DataAwsccNimblestudioLaunchProfileConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileConfig">DataAwsccNimblestudioLaunchProfileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileConfig">DataAwsccNimblestudioLaunchProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccNimblestudioLaunchProfile resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.isConstruct"></a>

```typescript
import { dataAwsccNimblestudioLaunchProfile } from '@cdktn/provider-awscc'

dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.isTerraformElement"></a>

```typescript
import { dataAwsccNimblestudioLaunchProfile } from '@cdktn/provider-awscc'

dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.isTerraformDataSource"></a>

```typescript
import { dataAwsccNimblestudioLaunchProfile } from '@cdktn/provider-awscc'

dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.generateConfigForImport"></a>

```typescript
import { dataAwsccNimblestudioLaunchProfile } from '@cdktn/provider-awscc'

dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccNimblestudioLaunchProfile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccNimblestudioLaunchProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccNimblestudioLaunchProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/nimblestudio_launch_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccNimblestudioLaunchProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.property.ec2SubnetIds">ec2SubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.property.launchProfileId">launchProfileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.property.launchProfileProtocolVersions">launchProfileProtocolVersions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.property.streamConfiguration">streamConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference">DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.property.studioComponentIds">studioComponentIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.property.studioId">studioId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.property.tags">tags</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `ec2SubnetIds`<sup>Required</sup> <a name="ec2SubnetIds" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.property.ec2SubnetIds"></a>

```typescript
public readonly ec2SubnetIds: string[];
```

- *Type:* string[]

---

##### `launchProfileId`<sup>Required</sup> <a name="launchProfileId" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.property.launchProfileId"></a>

```typescript
public readonly launchProfileId: string;
```

- *Type:* string

---

##### `launchProfileProtocolVersions`<sup>Required</sup> <a name="launchProfileProtocolVersions" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.property.launchProfileProtocolVersions"></a>

```typescript
public readonly launchProfileProtocolVersions: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `streamConfiguration`<sup>Required</sup> <a name="streamConfiguration" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.property.streamConfiguration"></a>

```typescript
public readonly streamConfiguration: DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference">DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference</a>

---

##### `studioComponentIds`<sup>Required</sup> <a name="studioComponentIds" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.property.studioComponentIds"></a>

```typescript
public readonly studioComponentIds: string[];
```

- *Type:* string[]

---

##### `studioId`<sup>Required</sup> <a name="studioId" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.property.studioId"></a>

```typescript
public readonly studioId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.property.tags"></a>

```typescript
public readonly tags: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfile.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccNimblestudioLaunchProfileConfig <a name="DataAwsccNimblestudioLaunchProfileConfig" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileConfig.Initializer"></a>

```typescript
import { dataAwsccNimblestudioLaunchProfile } from '@cdktn/provider-awscc'

const dataAwsccNimblestudioLaunchProfileConfig: dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/nimblestudio_launch_profile#id DataAwsccNimblestudioLaunchProfile#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccNimblestudioLaunchProfileStreamConfiguration <a name="DataAwsccNimblestudioLaunchProfileStreamConfiguration" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfiguration.Initializer"></a>

```typescript
import { dataAwsccNimblestudioLaunchProfile } from '@cdktn/provider-awscc'

const dataAwsccNimblestudioLaunchProfileStreamConfiguration: dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfiguration = { ... }
```


### DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackup <a name="DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackup" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackup"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackup.Initializer"></a>

```typescript
import { dataAwsccNimblestudioLaunchProfile } from '@cdktn/provider-awscc'

const dataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackup: dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackup = { ... }
```


### DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorage <a name="DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorage" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorage.Initializer"></a>

```typescript
import { dataAwsccNimblestudioLaunchProfile } from '@cdktn/provider-awscc'

const dataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorage: dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorage = { ... }
```


### DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRoot <a name="DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRoot" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRoot"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRoot.Initializer"></a>

```typescript
import { dataAwsccNimblestudioLaunchProfile } from '@cdktn/provider-awscc'

const dataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRoot: dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRoot = { ... }
```


### DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfiguration <a name="DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfiguration" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfiguration.Initializer"></a>

```typescript
import { dataAwsccNimblestudioLaunchProfile } from '@cdktn/provider-awscc'

const dataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfiguration: dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfiguration = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference <a name="DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccNimblestudioLaunchProfile } from '@cdktn/provider-awscc'

new dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.property.automaticTerminationMode">automaticTerminationMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.property.clipboardMode">clipboardMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.property.ec2InstanceTypes">ec2InstanceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.property.maxSessionLengthInMinutes">maxSessionLengthInMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.property.maxStoppedSessionLengthInMinutes">maxStoppedSessionLengthInMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.property.sessionBackup">sessionBackup</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference">DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.property.sessionPersistenceMode">sessionPersistenceMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.property.sessionStorage">sessionStorage</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference">DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.property.streamingImageIds">streamingImageIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.property.volumeConfiguration">volumeConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference">DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfiguration">DataAwsccNimblestudioLaunchProfileStreamConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `automaticTerminationMode`<sup>Required</sup> <a name="automaticTerminationMode" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.property.automaticTerminationMode"></a>

```typescript
public readonly automaticTerminationMode: string;
```

- *Type:* string

---

##### `clipboardMode`<sup>Required</sup> <a name="clipboardMode" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.property.clipboardMode"></a>

```typescript
public readonly clipboardMode: string;
```

- *Type:* string

---

##### `ec2InstanceTypes`<sup>Required</sup> <a name="ec2InstanceTypes" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.property.ec2InstanceTypes"></a>

```typescript
public readonly ec2InstanceTypes: string[];
```

- *Type:* string[]

---

##### `maxSessionLengthInMinutes`<sup>Required</sup> <a name="maxSessionLengthInMinutes" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.property.maxSessionLengthInMinutes"></a>

```typescript
public readonly maxSessionLengthInMinutes: number;
```

- *Type:* number

---

##### `maxStoppedSessionLengthInMinutes`<sup>Required</sup> <a name="maxStoppedSessionLengthInMinutes" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.property.maxStoppedSessionLengthInMinutes"></a>

```typescript
public readonly maxStoppedSessionLengthInMinutes: number;
```

- *Type:* number

---

##### `sessionBackup`<sup>Required</sup> <a name="sessionBackup" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.property.sessionBackup"></a>

```typescript
public readonly sessionBackup: DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference">DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference</a>

---

##### `sessionPersistenceMode`<sup>Required</sup> <a name="sessionPersistenceMode" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.property.sessionPersistenceMode"></a>

```typescript
public readonly sessionPersistenceMode: string;
```

- *Type:* string

---

##### `sessionStorage`<sup>Required</sup> <a name="sessionStorage" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.property.sessionStorage"></a>

```typescript
public readonly sessionStorage: DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference">DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference</a>

---

##### `streamingImageIds`<sup>Required</sup> <a name="streamingImageIds" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.property.streamingImageIds"></a>

```typescript
public readonly streamingImageIds: string[];
```

- *Type:* string[]

---

##### `volumeConfiguration`<sup>Required</sup> <a name="volumeConfiguration" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.property.volumeConfiguration"></a>

```typescript
public readonly volumeConfiguration: DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference">DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccNimblestudioLaunchProfileStreamConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfiguration">DataAwsccNimblestudioLaunchProfileStreamConfiguration</a>

---


### DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference <a name="DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.Initializer"></a>

```typescript
import { dataAwsccNimblestudioLaunchProfile } from '@cdktn/provider-awscc'

new dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.property.maxBackupsToRetain">maxBackupsToRetain</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackup">DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxBackupsToRetain`<sup>Required</sup> <a name="maxBackupsToRetain" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.property.maxBackupsToRetain"></a>

```typescript
public readonly maxBackupsToRetain: number;
```

- *Type:* number

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackup;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackup">DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackup</a>

---


### DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference <a name="DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.Initializer"></a>

```typescript
import { dataAwsccNimblestudioLaunchProfile } from '@cdktn/provider-awscc'

new dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.property.mode">mode</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.property.root">root</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference">DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorage">DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.property.mode"></a>

```typescript
public readonly mode: string[];
```

- *Type:* string[]

---

##### `root`<sup>Required</sup> <a name="root" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.property.root"></a>

```typescript
public readonly root: DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference">DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorage;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorage">DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorage</a>

---


### DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference <a name="DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.Initializer"></a>

```typescript
import { dataAwsccNimblestudioLaunchProfile } from '@cdktn/provider-awscc'

new dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.property.linux">linux</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.property.windows">windows</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRoot">DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRoot</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `linux`<sup>Required</sup> <a name="linux" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.property.linux"></a>

```typescript
public readonly linux: string;
```

- *Type:* string

---

##### `windows`<sup>Required</sup> <a name="windows" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.property.windows"></a>

```typescript
public readonly windows: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRoot;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRoot">DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRoot</a>

---


### DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference <a name="DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccNimblestudioLaunchProfile } from '@cdktn/provider-awscc'

new dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.property.iops">iops</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.property.size">size</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.property.throughput">throughput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfiguration">DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.property.iops"></a>

```typescript
public readonly iops: number;
```

- *Type:* number

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

---

##### `throughput`<sup>Required</sup> <a name="throughput" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.property.throughput"></a>

```typescript
public readonly throughput: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNimblestudioLaunchProfile.DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfiguration">DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfiguration</a>

---



