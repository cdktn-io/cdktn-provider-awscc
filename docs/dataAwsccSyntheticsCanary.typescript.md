# `dataAwsccSyntheticsCanary` Submodule <a name="`dataAwsccSyntheticsCanary` Submodule" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSyntheticsCanary <a name="DataAwsccSyntheticsCanary" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/synthetics_canary awscc_synthetics_canary}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.Initializer"></a>

```typescript
import { dataAwsccSyntheticsCanary } from '@cdktn/provider-awscc'

new dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary(scope: Construct, id: string, config: DataAwsccSyntheticsCanaryConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryConfig">DataAwsccSyntheticsCanaryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryConfig">DataAwsccSyntheticsCanaryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccSyntheticsCanary resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.isConstruct"></a>

```typescript
import { dataAwsccSyntheticsCanary } from '@cdktn/provider-awscc'

dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.isTerraformElement"></a>

```typescript
import { dataAwsccSyntheticsCanary } from '@cdktn/provider-awscc'

dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.isTerraformDataSource"></a>

```typescript
import { dataAwsccSyntheticsCanary } from '@cdktn/provider-awscc'

dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.generateConfigForImport"></a>

```typescript
import { dataAwsccSyntheticsCanary } from '@cdktn/provider-awscc'

dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccSyntheticsCanary resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccSyntheticsCanary to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccSyntheticsCanary that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/synthetics_canary#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSyntheticsCanary to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.artifactConfig">artifactConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference">DataAwsccSyntheticsCanaryArtifactConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.artifactS3Location">artifactS3Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.browserConfigs">browserConfigs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsList">DataAwsccSyntheticsCanaryBrowserConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.canaryId">canaryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.code">code</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference">DataAwsccSyntheticsCanaryCodeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.deleteLambdaResourcesOnCanaryDeletion">deleteLambdaResourcesOnCanaryDeletion</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.dryRunAndUpdate">dryRunAndUpdate</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.executionRoleArn">executionRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.failureRetentionPeriod">failureRetentionPeriod</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.provisionedResourceCleanup">provisionedResourceCleanup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.resourcesToReplicateTags">resourcesToReplicateTags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.runConfig">runConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference">DataAwsccSyntheticsCanaryRunConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.runtimeVersion">runtimeVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference">DataAwsccSyntheticsCanaryScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.startCanaryAfterCreation">startCanaryAfterCreation</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.successRetentionPeriod">successRetentionPeriod</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsList">DataAwsccSyntheticsCanaryTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.visualReference">visualReference</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference">DataAwsccSyntheticsCanaryVisualReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.visualReferences">visualReferences</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesList">DataAwsccSyntheticsCanaryVisualReferencesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.vpcConfig">vpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference">DataAwsccSyntheticsCanaryVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `artifactConfig`<sup>Required</sup> <a name="artifactConfig" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.artifactConfig"></a>

```typescript
public readonly artifactConfig: DataAwsccSyntheticsCanaryArtifactConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference">DataAwsccSyntheticsCanaryArtifactConfigOutputReference</a>

---

##### `artifactS3Location`<sup>Required</sup> <a name="artifactS3Location" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.artifactS3Location"></a>

```typescript
public readonly artifactS3Location: string;
```

- *Type:* string

---

##### `browserConfigs`<sup>Required</sup> <a name="browserConfigs" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.browserConfigs"></a>

```typescript
public readonly browserConfigs: DataAwsccSyntheticsCanaryBrowserConfigsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsList">DataAwsccSyntheticsCanaryBrowserConfigsList</a>

---

##### `canaryId`<sup>Required</sup> <a name="canaryId" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.canaryId"></a>

```typescript
public readonly canaryId: string;
```

- *Type:* string

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.code"></a>

```typescript
public readonly code: DataAwsccSyntheticsCanaryCodeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference">DataAwsccSyntheticsCanaryCodeOutputReference</a>

---

##### `deleteLambdaResourcesOnCanaryDeletion`<sup>Required</sup> <a name="deleteLambdaResourcesOnCanaryDeletion" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.deleteLambdaResourcesOnCanaryDeletion"></a>

```typescript
public readonly deleteLambdaResourcesOnCanaryDeletion: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `dryRunAndUpdate`<sup>Required</sup> <a name="dryRunAndUpdate" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.dryRunAndUpdate"></a>

```typescript
public readonly dryRunAndUpdate: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `executionRoleArn`<sup>Required</sup> <a name="executionRoleArn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.executionRoleArn"></a>

```typescript
public readonly executionRoleArn: string;
```

- *Type:* string

---

##### `failureRetentionPeriod`<sup>Required</sup> <a name="failureRetentionPeriod" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.failureRetentionPeriod"></a>

```typescript
public readonly failureRetentionPeriod: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `provisionedResourceCleanup`<sup>Required</sup> <a name="provisionedResourceCleanup" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.provisionedResourceCleanup"></a>

```typescript
public readonly provisionedResourceCleanup: string;
```

- *Type:* string

---

##### `resourcesToReplicateTags`<sup>Required</sup> <a name="resourcesToReplicateTags" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.resourcesToReplicateTags"></a>

```typescript
public readonly resourcesToReplicateTags: string[];
```

- *Type:* string[]

---

##### `runConfig`<sup>Required</sup> <a name="runConfig" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.runConfig"></a>

```typescript
public readonly runConfig: DataAwsccSyntheticsCanaryRunConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference">DataAwsccSyntheticsCanaryRunConfigOutputReference</a>

---

##### `runtimeVersion`<sup>Required</sup> <a name="runtimeVersion" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.runtimeVersion"></a>

```typescript
public readonly runtimeVersion: string;
```

- *Type:* string

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.schedule"></a>

```typescript
public readonly schedule: DataAwsccSyntheticsCanaryScheduleOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference">DataAwsccSyntheticsCanaryScheduleOutputReference</a>

---

##### `startCanaryAfterCreation`<sup>Required</sup> <a name="startCanaryAfterCreation" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.startCanaryAfterCreation"></a>

```typescript
public readonly startCanaryAfterCreation: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `successRetentionPeriod`<sup>Required</sup> <a name="successRetentionPeriod" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.successRetentionPeriod"></a>

```typescript
public readonly successRetentionPeriod: number;
```

- *Type:* number

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.tags"></a>

```typescript
public readonly tags: DataAwsccSyntheticsCanaryTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsList">DataAwsccSyntheticsCanaryTagsList</a>

---

##### `visualReference`<sup>Required</sup> <a name="visualReference" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.visualReference"></a>

```typescript
public readonly visualReference: DataAwsccSyntheticsCanaryVisualReferenceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference">DataAwsccSyntheticsCanaryVisualReferenceOutputReference</a>

---

##### `visualReferences`<sup>Required</sup> <a name="visualReferences" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.visualReferences"></a>

```typescript
public readonly visualReferences: DataAwsccSyntheticsCanaryVisualReferencesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesList">DataAwsccSyntheticsCanaryVisualReferencesList</a>

---

##### `vpcConfig`<sup>Required</sup> <a name="vpcConfig" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.vpcConfig"></a>

```typescript
public readonly vpcConfig: DataAwsccSyntheticsCanaryVpcConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference">DataAwsccSyntheticsCanaryVpcConfigOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSyntheticsCanaryArtifactConfig <a name="DataAwsccSyntheticsCanaryArtifactConfig" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfig.Initializer"></a>

```typescript
import { dataAwsccSyntheticsCanary } from '@cdktn/provider-awscc'

const dataAwsccSyntheticsCanaryArtifactConfig: dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfig = { ... }
```


### DataAwsccSyntheticsCanaryArtifactConfigS3Encryption <a name="DataAwsccSyntheticsCanaryArtifactConfigS3Encryption" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3Encryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3Encryption.Initializer"></a>

```typescript
import { dataAwsccSyntheticsCanary } from '@cdktn/provider-awscc'

const dataAwsccSyntheticsCanaryArtifactConfigS3Encryption: dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3Encryption = { ... }
```


### DataAwsccSyntheticsCanaryBrowserConfigs <a name="DataAwsccSyntheticsCanaryBrowserConfigs" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigs.Initializer"></a>

```typescript
import { dataAwsccSyntheticsCanary } from '@cdktn/provider-awscc'

const dataAwsccSyntheticsCanaryBrowserConfigs: dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigs = { ... }
```


### DataAwsccSyntheticsCanaryCode <a name="DataAwsccSyntheticsCanaryCode" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCode"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCode.Initializer"></a>

```typescript
import { dataAwsccSyntheticsCanary } from '@cdktn/provider-awscc'

const dataAwsccSyntheticsCanaryCode: dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCode = { ... }
```


### DataAwsccSyntheticsCanaryCodeDependencies <a name="DataAwsccSyntheticsCanaryCodeDependencies" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependencies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependencies.Initializer"></a>

```typescript
import { dataAwsccSyntheticsCanary } from '@cdktn/provider-awscc'

const dataAwsccSyntheticsCanaryCodeDependencies: dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependencies = { ... }
```


### DataAwsccSyntheticsCanaryConfig <a name="DataAwsccSyntheticsCanaryConfig" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryConfig.Initializer"></a>

```typescript
import { dataAwsccSyntheticsCanary } from '@cdktn/provider-awscc'

const dataAwsccSyntheticsCanaryConfig: dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/synthetics_canary#id DataAwsccSyntheticsCanary#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSyntheticsCanaryRunConfig <a name="DataAwsccSyntheticsCanaryRunConfig" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfig.Initializer"></a>

```typescript
import { dataAwsccSyntheticsCanary } from '@cdktn/provider-awscc'

const dataAwsccSyntheticsCanaryRunConfig: dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfig = { ... }
```


### DataAwsccSyntheticsCanarySchedule <a name="DataAwsccSyntheticsCanarySchedule" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanarySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanarySchedule.Initializer"></a>

```typescript
import { dataAwsccSyntheticsCanary } from '@cdktn/provider-awscc'

const dataAwsccSyntheticsCanarySchedule: dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanarySchedule = { ... }
```


### DataAwsccSyntheticsCanaryScheduleRetryConfig <a name="DataAwsccSyntheticsCanaryScheduleRetryConfig" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfig.Initializer"></a>

```typescript
import { dataAwsccSyntheticsCanary } from '@cdktn/provider-awscc'

const dataAwsccSyntheticsCanaryScheduleRetryConfig: dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfig = { ... }
```


### DataAwsccSyntheticsCanaryTags <a name="DataAwsccSyntheticsCanaryTags" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTags.Initializer"></a>

```typescript
import { dataAwsccSyntheticsCanary } from '@cdktn/provider-awscc'

const dataAwsccSyntheticsCanaryTags: dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTags = { ... }
```


### DataAwsccSyntheticsCanaryVisualReference <a name="DataAwsccSyntheticsCanaryVisualReference" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReference"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReference.Initializer"></a>

```typescript
import { dataAwsccSyntheticsCanary } from '@cdktn/provider-awscc'

const dataAwsccSyntheticsCanaryVisualReference: dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReference = { ... }
```


### DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshots <a name="DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshots" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshots"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshots.Initializer"></a>

```typescript
import { dataAwsccSyntheticsCanary } from '@cdktn/provider-awscc'

const dataAwsccSyntheticsCanaryVisualReferenceBaseScreenshots: dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshots = { ... }
```


### DataAwsccSyntheticsCanaryVisualReferences <a name="DataAwsccSyntheticsCanaryVisualReferences" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferences"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferences.Initializer"></a>

```typescript
import { dataAwsccSyntheticsCanary } from '@cdktn/provider-awscc'

const dataAwsccSyntheticsCanaryVisualReferences: dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferences = { ... }
```


### DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshots <a name="DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshots" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshots"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshots.Initializer"></a>

```typescript
import { dataAwsccSyntheticsCanary } from '@cdktn/provider-awscc'

const dataAwsccSyntheticsCanaryVisualReferencesBaseScreenshots: dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshots = { ... }
```


### DataAwsccSyntheticsCanaryVpcConfig <a name="DataAwsccSyntheticsCanaryVpcConfig" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfig.Initializer"></a>

```typescript
import { dataAwsccSyntheticsCanary } from '@cdktn/provider-awscc'

const dataAwsccSyntheticsCanaryVpcConfig: dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfig = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSyntheticsCanaryArtifactConfigOutputReference <a name="DataAwsccSyntheticsCanaryArtifactConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccSyntheticsCanary } from '@cdktn/provider-awscc'

new dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.property.s3Encryption">s3Encryption</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference">DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfig">DataAwsccSyntheticsCanaryArtifactConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3Encryption`<sup>Required</sup> <a name="s3Encryption" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.property.s3Encryption"></a>

```typescript
public readonly s3Encryption: DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference">DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSyntheticsCanaryArtifactConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfig">DataAwsccSyntheticsCanaryArtifactConfig</a>

---


### DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference <a name="DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.Initializer"></a>

```typescript
import { dataAwsccSyntheticsCanary } from '@cdktn/provider-awscc'

new dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.encryptionMode">encryptionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3Encryption">DataAwsccSyntheticsCanaryArtifactConfigS3Encryption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `encryptionMode`<sup>Required</sup> <a name="encryptionMode" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.encryptionMode"></a>

```typescript
public readonly encryptionMode: string;
```

- *Type:* string

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSyntheticsCanaryArtifactConfigS3Encryption;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3Encryption">DataAwsccSyntheticsCanaryArtifactConfigS3Encryption</a>

---


### DataAwsccSyntheticsCanaryBrowserConfigsList <a name="DataAwsccSyntheticsCanaryBrowserConfigsList" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsList.Initializer"></a>

```typescript
import { dataAwsccSyntheticsCanary } from '@cdktn/provider-awscc'

new dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsList.get"></a>

```typescript
public get(index: number): DataAwsccSyntheticsCanaryBrowserConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccSyntheticsCanaryBrowserConfigsOutputReference <a name="DataAwsccSyntheticsCanaryBrowserConfigsOutputReference" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.Initializer"></a>

```typescript
import { dataAwsccSyntheticsCanary } from '@cdktn/provider-awscc'

new dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.property.browserType">browserType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigs">DataAwsccSyntheticsCanaryBrowserConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `browserType`<sup>Required</sup> <a name="browserType" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.property.browserType"></a>

```typescript
public readonly browserType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSyntheticsCanaryBrowserConfigs;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigs">DataAwsccSyntheticsCanaryBrowserConfigs</a>

---


### DataAwsccSyntheticsCanaryCodeDependenciesList <a name="DataAwsccSyntheticsCanaryCodeDependenciesList" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesList.Initializer"></a>

```typescript
import { dataAwsccSyntheticsCanary } from '@cdktn/provider-awscc'

new dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesList.get"></a>

```typescript
public get(index: number): DataAwsccSyntheticsCanaryCodeDependenciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccSyntheticsCanaryCodeDependenciesOutputReference <a name="DataAwsccSyntheticsCanaryCodeDependenciesOutputReference" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.Initializer"></a>

```typescript
import { dataAwsccSyntheticsCanary } from '@cdktn/provider-awscc'

new dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.property.reference">reference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependencies">DataAwsccSyntheticsCanaryCodeDependencies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `reference`<sup>Required</sup> <a name="reference" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.property.reference"></a>

```typescript
public readonly reference: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSyntheticsCanaryCodeDependencies;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependencies">DataAwsccSyntheticsCanaryCodeDependencies</a>

---


### DataAwsccSyntheticsCanaryCodeOutputReference <a name="DataAwsccSyntheticsCanaryCodeOutputReference" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.Initializer"></a>

```typescript
import { dataAwsccSyntheticsCanary } from '@cdktn/provider-awscc'

new dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.property.blueprintTypes">blueprintTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.property.dependencies">dependencies</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesList">DataAwsccSyntheticsCanaryCodeDependenciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.property.handler">handler</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.property.s3Bucket">s3Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.property.s3Key">s3Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.property.s3ObjectVersion">s3ObjectVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.property.script">script</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.property.sourceLocationArn">sourceLocationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCode">DataAwsccSyntheticsCanaryCode</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `blueprintTypes`<sup>Required</sup> <a name="blueprintTypes" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.property.blueprintTypes"></a>

```typescript
public readonly blueprintTypes: string[];
```

- *Type:* string[]

---

##### `dependencies`<sup>Required</sup> <a name="dependencies" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.property.dependencies"></a>

```typescript
public readonly dependencies: DataAwsccSyntheticsCanaryCodeDependenciesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesList">DataAwsccSyntheticsCanaryCodeDependenciesList</a>

---

##### `handler`<sup>Required</sup> <a name="handler" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.property.handler"></a>

```typescript
public readonly handler: string;
```

- *Type:* string

---

##### `s3Bucket`<sup>Required</sup> <a name="s3Bucket" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.property.s3Bucket"></a>

```typescript
public readonly s3Bucket: string;
```

- *Type:* string

---

##### `s3Key`<sup>Required</sup> <a name="s3Key" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.property.s3Key"></a>

```typescript
public readonly s3Key: string;
```

- *Type:* string

---

##### `s3ObjectVersion`<sup>Required</sup> <a name="s3ObjectVersion" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.property.s3ObjectVersion"></a>

```typescript
public readonly s3ObjectVersion: string;
```

- *Type:* string

---

##### `script`<sup>Required</sup> <a name="script" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.property.script"></a>

```typescript
public readonly script: string;
```

- *Type:* string

---

##### `sourceLocationArn`<sup>Required</sup> <a name="sourceLocationArn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.property.sourceLocationArn"></a>

```typescript
public readonly sourceLocationArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSyntheticsCanaryCode;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCode">DataAwsccSyntheticsCanaryCode</a>

---


### DataAwsccSyntheticsCanaryRunConfigOutputReference <a name="DataAwsccSyntheticsCanaryRunConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccSyntheticsCanary } from '@cdktn/provider-awscc'

new dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.property.activeTracing">activeTracing</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.property.environmentVariables">environmentVariables</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.property.ephemeralStorage">ephemeralStorage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.property.memoryInMb">memoryInMb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.property.timeoutInSeconds">timeoutInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfig">DataAwsccSyntheticsCanaryRunConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `activeTracing`<sup>Required</sup> <a name="activeTracing" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.property.activeTracing"></a>

```typescript
public readonly activeTracing: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `environmentVariables`<sup>Required</sup> <a name="environmentVariables" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.property.environmentVariables"></a>

```typescript
public readonly environmentVariables: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `ephemeralStorage`<sup>Required</sup> <a name="ephemeralStorage" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.property.ephemeralStorage"></a>

```typescript
public readonly ephemeralStorage: number;
```

- *Type:* number

---

##### `memoryInMb`<sup>Required</sup> <a name="memoryInMb" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.property.memoryInMb"></a>

```typescript
public readonly memoryInMb: number;
```

- *Type:* number

---

##### `timeoutInSeconds`<sup>Required</sup> <a name="timeoutInSeconds" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.property.timeoutInSeconds"></a>

```typescript
public readonly timeoutInSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSyntheticsCanaryRunConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfig">DataAwsccSyntheticsCanaryRunConfig</a>

---


### DataAwsccSyntheticsCanaryScheduleOutputReference <a name="DataAwsccSyntheticsCanaryScheduleOutputReference" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.Initializer"></a>

```typescript
import { dataAwsccSyntheticsCanary } from '@cdktn/provider-awscc'

new dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.property.durationInSeconds">durationInSeconds</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.property.retryConfig">retryConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference">DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanarySchedule">DataAwsccSyntheticsCanarySchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `durationInSeconds`<sup>Required</sup> <a name="durationInSeconds" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.property.durationInSeconds"></a>

```typescript
public readonly durationInSeconds: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `retryConfig`<sup>Required</sup> <a name="retryConfig" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.property.retryConfig"></a>

```typescript
public readonly retryConfig: DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference">DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSyntheticsCanarySchedule;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanarySchedule">DataAwsccSyntheticsCanarySchedule</a>

---


### DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference <a name="DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccSyntheticsCanary } from '@cdktn/provider-awscc'

new dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.property.maxRetries">maxRetries</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfig">DataAwsccSyntheticsCanaryScheduleRetryConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxRetries`<sup>Required</sup> <a name="maxRetries" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.property.maxRetries"></a>

```typescript
public readonly maxRetries: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSyntheticsCanaryScheduleRetryConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfig">DataAwsccSyntheticsCanaryScheduleRetryConfig</a>

---


### DataAwsccSyntheticsCanaryTagsList <a name="DataAwsccSyntheticsCanaryTagsList" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsList.Initializer"></a>

```typescript
import { dataAwsccSyntheticsCanary } from '@cdktn/provider-awscc'

new dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsList.get"></a>

```typescript
public get(index: number): DataAwsccSyntheticsCanaryTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccSyntheticsCanaryTagsOutputReference <a name="DataAwsccSyntheticsCanaryTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccSyntheticsCanary } from '@cdktn/provider-awscc'

new dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTags">DataAwsccSyntheticsCanaryTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSyntheticsCanaryTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTags">DataAwsccSyntheticsCanaryTags</a>

---


### DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList <a name="DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList.Initializer"></a>

```typescript
import { dataAwsccSyntheticsCanary } from '@cdktn/provider-awscc'

new dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList.get"></a>

```typescript
public get(index: number): DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference <a name="DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.Initializer"></a>

```typescript
import { dataAwsccSyntheticsCanary } from '@cdktn/provider-awscc'

new dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.property.ignoreCoordinates">ignoreCoordinates</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.property.screenshotName">screenshotName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshots">DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshots</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ignoreCoordinates`<sup>Required</sup> <a name="ignoreCoordinates" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.property.ignoreCoordinates"></a>

```typescript
public readonly ignoreCoordinates: string[];
```

- *Type:* string[]

---

##### `screenshotName`<sup>Required</sup> <a name="screenshotName" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.property.screenshotName"></a>

```typescript
public readonly screenshotName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshots;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshots">DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshots</a>

---


### DataAwsccSyntheticsCanaryVisualReferenceOutputReference <a name="DataAwsccSyntheticsCanaryVisualReferenceOutputReference" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.Initializer"></a>

```typescript
import { dataAwsccSyntheticsCanary } from '@cdktn/provider-awscc'

new dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.property.baseCanaryRunId">baseCanaryRunId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.property.baseScreenshots">baseScreenshots</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList">DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.property.browserType">browserType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReference">DataAwsccSyntheticsCanaryVisualReference</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `baseCanaryRunId`<sup>Required</sup> <a name="baseCanaryRunId" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.property.baseCanaryRunId"></a>

```typescript
public readonly baseCanaryRunId: string;
```

- *Type:* string

---

##### `baseScreenshots`<sup>Required</sup> <a name="baseScreenshots" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.property.baseScreenshots"></a>

```typescript
public readonly baseScreenshots: DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList">DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList</a>

---

##### `browserType`<sup>Required</sup> <a name="browserType" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.property.browserType"></a>

```typescript
public readonly browserType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSyntheticsCanaryVisualReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReference">DataAwsccSyntheticsCanaryVisualReference</a>

---


### DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList <a name="DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList.Initializer"></a>

```typescript
import { dataAwsccSyntheticsCanary } from '@cdktn/provider-awscc'

new dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList.get"></a>

```typescript
public get(index: number): DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference <a name="DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.Initializer"></a>

```typescript
import { dataAwsccSyntheticsCanary } from '@cdktn/provider-awscc'

new dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.property.ignoreCoordinates">ignoreCoordinates</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.property.screenshotName">screenshotName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshots">DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshots</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ignoreCoordinates`<sup>Required</sup> <a name="ignoreCoordinates" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.property.ignoreCoordinates"></a>

```typescript
public readonly ignoreCoordinates: string[];
```

- *Type:* string[]

---

##### `screenshotName`<sup>Required</sup> <a name="screenshotName" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.property.screenshotName"></a>

```typescript
public readonly screenshotName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshots;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshots">DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshots</a>

---


### DataAwsccSyntheticsCanaryVisualReferencesList <a name="DataAwsccSyntheticsCanaryVisualReferencesList" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesList.Initializer"></a>

```typescript
import { dataAwsccSyntheticsCanary } from '@cdktn/provider-awscc'

new dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesList.get"></a>

```typescript
public get(index: number): DataAwsccSyntheticsCanaryVisualReferencesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccSyntheticsCanaryVisualReferencesOutputReference <a name="DataAwsccSyntheticsCanaryVisualReferencesOutputReference" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.Initializer"></a>

```typescript
import { dataAwsccSyntheticsCanary } from '@cdktn/provider-awscc'

new dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.property.baseCanaryRunId">baseCanaryRunId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.property.baseScreenshots">baseScreenshots</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList">DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.property.browserType">browserType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferences">DataAwsccSyntheticsCanaryVisualReferences</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `baseCanaryRunId`<sup>Required</sup> <a name="baseCanaryRunId" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.property.baseCanaryRunId"></a>

```typescript
public readonly baseCanaryRunId: string;
```

- *Type:* string

---

##### `baseScreenshots`<sup>Required</sup> <a name="baseScreenshots" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.property.baseScreenshots"></a>

```typescript
public readonly baseScreenshots: DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList">DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList</a>

---

##### `browserType`<sup>Required</sup> <a name="browserType" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.property.browserType"></a>

```typescript
public readonly browserType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSyntheticsCanaryVisualReferences;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferences">DataAwsccSyntheticsCanaryVisualReferences</a>

---


### DataAwsccSyntheticsCanaryVpcConfigOutputReference <a name="DataAwsccSyntheticsCanaryVpcConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccSyntheticsCanary } from '@cdktn/provider-awscc'

new dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.property.ipv6AllowedForDualStack">ipv6AllowedForDualStack</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfig">DataAwsccSyntheticsCanaryVpcConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipv6AllowedForDualStack`<sup>Required</sup> <a name="ipv6AllowedForDualStack" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.property.ipv6AllowedForDualStack"></a>

```typescript
public readonly ipv6AllowedForDualStack: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSyntheticsCanaryVpcConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfig">DataAwsccSyntheticsCanaryVpcConfig</a>

---



