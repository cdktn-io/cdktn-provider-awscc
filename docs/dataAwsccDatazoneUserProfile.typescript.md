# `dataAwsccDatazoneUserProfile` Submodule <a name="`dataAwsccDatazoneUserProfile` Submodule" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccDatazoneUserProfile <a name="DataAwsccDatazoneUserProfile" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/datazone_user_profile awscc_datazone_user_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile.Initializer"></a>

```typescript
import { dataAwsccDatazoneUserProfile } from '@cdktn/provider-awscc'

new dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile(scope: Construct, id: string, config: DataAwsccDatazoneUserProfileConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileConfig">DataAwsccDatazoneUserProfileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileConfig">DataAwsccDatazoneUserProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccDatazoneUserProfile resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile.isConstruct"></a>

```typescript
import { dataAwsccDatazoneUserProfile } from '@cdktn/provider-awscc'

dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile.isTerraformElement"></a>

```typescript
import { dataAwsccDatazoneUserProfile } from '@cdktn/provider-awscc'

dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile.isTerraformDataSource"></a>

```typescript
import { dataAwsccDatazoneUserProfile } from '@cdktn/provider-awscc'

dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile.generateConfigForImport"></a>

```typescript
import { dataAwsccDatazoneUserProfile } from '@cdktn/provider-awscc'

dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccDatazoneUserProfile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccDatazoneUserProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccDatazoneUserProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/datazone_user_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccDatazoneUserProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile.property.details">details</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsOutputReference">DataAwsccDatazoneUserProfileDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile.property.domainId">domainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile.property.domainIdentifier">domainIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile.property.sessionName">sessionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile.property.userIdentifier">userIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile.property.userProfileId">userProfileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile.property.userType">userType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile.property.details"></a>

```typescript
public readonly details: DataAwsccDatazoneUserProfileDetailsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsOutputReference">DataAwsccDatazoneUserProfileDetailsOutputReference</a>

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

---

##### `domainIdentifier`<sup>Required</sup> <a name="domainIdentifier" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile.property.domainIdentifier"></a>

```typescript
public readonly domainIdentifier: string;
```

- *Type:* string

---

##### `sessionName`<sup>Required</sup> <a name="sessionName" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile.property.sessionName"></a>

```typescript
public readonly sessionName: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `userIdentifier`<sup>Required</sup> <a name="userIdentifier" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile.property.userIdentifier"></a>

```typescript
public readonly userIdentifier: string;
```

- *Type:* string

---

##### `userProfileId`<sup>Required</sup> <a name="userProfileId" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile.property.userProfileId"></a>

```typescript
public readonly userProfileId: string;
```

- *Type:* string

---

##### `userType`<sup>Required</sup> <a name="userType" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile.property.userType"></a>

```typescript
public readonly userType: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfile.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccDatazoneUserProfileConfig <a name="DataAwsccDatazoneUserProfileConfig" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileConfig.Initializer"></a>

```typescript
import { dataAwsccDatazoneUserProfile } from '@cdktn/provider-awscc'

const dataAwsccDatazoneUserProfileConfig: dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/datazone_user_profile#id DataAwsccDatazoneUserProfile#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccDatazoneUserProfileDetails <a name="DataAwsccDatazoneUserProfileDetails" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetails.Initializer"></a>

```typescript
import { dataAwsccDatazoneUserProfile } from '@cdktn/provider-awscc'

const dataAwsccDatazoneUserProfileDetails: dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetails = { ... }
```


### DataAwsccDatazoneUserProfileDetailsIam <a name="DataAwsccDatazoneUserProfileDetailsIam" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsIam"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsIam.Initializer"></a>

```typescript
import { dataAwsccDatazoneUserProfile } from '@cdktn/provider-awscc'

const dataAwsccDatazoneUserProfileDetailsIam: dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsIam = { ... }
```


### DataAwsccDatazoneUserProfileDetailsSso <a name="DataAwsccDatazoneUserProfileDetailsSso" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsSso"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsSso.Initializer"></a>

```typescript
import { dataAwsccDatazoneUserProfile } from '@cdktn/provider-awscc'

const dataAwsccDatazoneUserProfileDetailsSso: dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsSso = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccDatazoneUserProfileDetailsIamOutputReference <a name="DataAwsccDatazoneUserProfileDetailsIamOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsIamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsIamOutputReference.Initializer"></a>

```typescript
import { dataAwsccDatazoneUserProfile } from '@cdktn/provider-awscc'

new dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsIamOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsIamOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsIamOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsIamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsIamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsIamOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsIamOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsIamOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsIamOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsIamOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsIamOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsIamOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsIamOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsIamOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsIamOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsIamOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsIamOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsIamOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsIamOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsIamOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsIamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsIamOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsIamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsIamOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsIamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsIamOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsIamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsIamOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsIamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsIamOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsIamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsIamOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsIamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsIamOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsIamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsIamOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsIamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsIamOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsIamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsIamOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsIamOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsIamOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsIamOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsIamOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsIamOutputReference.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsIamOutputReference.property.groupProfileId">groupProfileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsIamOutputReference.property.sessionName">sessionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsIamOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsIam">DataAwsccDatazoneUserProfileDetailsIam</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsIamOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsIamOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsIamOutputReference.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `groupProfileId`<sup>Required</sup> <a name="groupProfileId" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsIamOutputReference.property.groupProfileId"></a>

```typescript
public readonly groupProfileId: string;
```

- *Type:* string

---

##### `sessionName`<sup>Required</sup> <a name="sessionName" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsIamOutputReference.property.sessionName"></a>

```typescript
public readonly sessionName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsIamOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDatazoneUserProfileDetailsIam;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsIam">DataAwsccDatazoneUserProfileDetailsIam</a>

---


### DataAwsccDatazoneUserProfileDetailsOutputReference <a name="DataAwsccDatazoneUserProfileDetailsOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsOutputReference.Initializer"></a>

```typescript
import { dataAwsccDatazoneUserProfile } from '@cdktn/provider-awscc'

new dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsOutputReference.property.iam">iam</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsIamOutputReference">DataAwsccDatazoneUserProfileDetailsIamOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsOutputReference.property.sso">sso</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsSsoOutputReference">DataAwsccDatazoneUserProfileDetailsSsoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetails">DataAwsccDatazoneUserProfileDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `iam`<sup>Required</sup> <a name="iam" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsOutputReference.property.iam"></a>

```typescript
public readonly iam: DataAwsccDatazoneUserProfileDetailsIamOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsIamOutputReference">DataAwsccDatazoneUserProfileDetailsIamOutputReference</a>

---

##### `sso`<sup>Required</sup> <a name="sso" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsOutputReference.property.sso"></a>

```typescript
public readonly sso: DataAwsccDatazoneUserProfileDetailsSsoOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsSsoOutputReference">DataAwsccDatazoneUserProfileDetailsSsoOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDatazoneUserProfileDetails;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetails">DataAwsccDatazoneUserProfileDetails</a>

---


### DataAwsccDatazoneUserProfileDetailsSsoOutputReference <a name="DataAwsccDatazoneUserProfileDetailsSsoOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsSsoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsSsoOutputReference.Initializer"></a>

```typescript
import { dataAwsccDatazoneUserProfile } from '@cdktn/provider-awscc'

new dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsSsoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsSsoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsSsoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsSsoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsSsoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsSsoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsSsoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsSsoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsSsoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsSsoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsSsoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsSsoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsSsoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsSsoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsSsoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsSsoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsSsoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsSsoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsSsoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsSsoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsSsoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsSsoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsSsoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsSsoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsSsoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsSsoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsSsoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsSsoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsSsoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsSsoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsSsoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsSsoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsSsoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsSsoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsSsoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsSsoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsSsoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsSsoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsSsoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsSsoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsSsoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsSsoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsSsoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsSsoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsSsoOutputReference.property.firstName">firstName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsSsoOutputReference.property.lastName">lastName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsSsoOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsSsoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsSso">DataAwsccDatazoneUserProfileDetailsSso</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsSsoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsSsoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `firstName`<sup>Required</sup> <a name="firstName" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsSsoOutputReference.property.firstName"></a>

```typescript
public readonly firstName: string;
```

- *Type:* string

---

##### `lastName`<sup>Required</sup> <a name="lastName" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsSsoOutputReference.property.lastName"></a>

```typescript
public readonly lastName: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsSsoOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsSsoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDatazoneUserProfileDetailsSso;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneUserProfile.DataAwsccDatazoneUserProfileDetailsSso">DataAwsccDatazoneUserProfileDetailsSso</a>

---



